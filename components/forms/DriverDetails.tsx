import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentWrapper from "./PaymentModal";
import { Elements } from "@stripe/react-stripe-js";
import Link from "next/link";

const stripePromise = loadStripe("pk_test_51QWeSwDgaWgRlwMxzXay5R7FHglYjMymwM2BwlykO6izceqB6tIvQPJ2GjXhLNsJLWSjpmZ3NbDrRhffNLZGAfe600r8XnM7B1");

interface FormErrors {
    firstName?: string;
    lastName?: string;
    dob?: string;
    email?: string;
    phone?: string;
    postCode?: string;
    vehicleType?: string;
    licenceType?: string;
    termsAccepted?: string;
}

const DriverDetails = ({ formData, setEventDetails, onNextStep }) => {
    const [driverFormData, setDriverFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: "",
        postCode: "",
        vehicleType: "",
        licenceType: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const postCodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDriverFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!driverFormData.firstName) newErrors.firstName = "First name is required.";
        if (!driverFormData.lastName) newErrors.lastName = "Last name is required.";
        if (!driverFormData.dob) newErrors.dob = "Date of birth is required.";
        if (!driverFormData.email || !/\S+@\S+\.\S+/.test(driverFormData.email))
            newErrors.email = "A valid email is required.";
        if (!driverFormData.phone || driverFormData.phone.length < 10)
            newErrors.phone = "A valid phone number is required.";
        if (!driverFormData.postCode || !postCodeRegex.test(driverFormData.postCode))
            newErrors.postCode = "A valid UK postcode is required.";
        if (!driverFormData.vehicleType)
            newErrors.vehicleType = "Vehicle type is required.";
        if (!driverFormData.licenceType)
            newErrors.licenceType = "Licence type is required.";
        if (!driverFormData.termsAccepted)
            newErrors.termsAccepted = "You must accept the terms and conditions.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validateForm()) return;
        setLoading(true)
        setModalOpen(true);

    };

    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg  w-full max-w-2xl">
                {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
                <>
                    {/* First Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={driverFormData.firstName}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.firstName
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.firstName && (
                            <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={driverFormData.lastName}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.lastName
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.lastName && (
                            <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dob"
                            value={driverFormData.dob}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.dob
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.dob && (
                            <p className="text-sm text-red-500 mt-1">{errors.dob}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={driverFormData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.email
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={driverFormData.phone}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.phone
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Post Code */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Post Code
                        </label>
                        <input
                            type="text"
                            name="postCode"
                            value={driverFormData.postCode}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.postCode
                                ? "border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                        />
                        {errors.postCode && (
                            <p className="text-sm text-red-500 mt-1">{errors.postCode}</p>
                        )}
                    </div>

                    {/* Vehicle Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Vehicle Type
                        </label>
                        <select
                            name="vehicleType"
                            value={driverFormData.vehicleType}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="HGV">HGV</option>
                            <option value="Ambulance">Ambulance</option>
                            <option value="Taxi">Taxi</option>
                            <option value="Bus">Bus</option>
                            <option value="Truck">Truck</option>
                        </select>
                        {errors.vehicleType && (
                            <p className="text-sm text-red-500 mt-1">{errors.vehicleType}</p>
                        )}
                    </div>

                    {/* Licence Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Licence Type
                        </label>
                        <select
                            name="licenceType"
                            value={driverFormData.licenceType}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="new">New Licence</option>
                            <option value="renewal">Renewal Licence</option>
                        </select>
                        {errors.licenceType && (
                            <p className="text-sm text-red-500 mt-1">{errors.licenceType}</p>
                        )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={driverFormData.termsAccepted}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                                I accept the <Link href="/terms-of-service" className="text-blue-900 underline">terms and conditions</Link>
                            </span>
                        </label>
                        {errors.termsAccepted && (
                            <p className="text-sm text-red-500 mt-1">{errors.termsAccepted}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Proceed to Payment"}
                    </button>
                </>
                {isModalOpen && (
                    <Elements stripe={stripePromise}>
                        <PaymentWrapper
                            isOpen={isModalOpen}
                            onClose={() => setModalOpen(false)}
                            driverFormData={driverFormData}
                            formData={formData}
                            setDriverFormData={setDriverFormData}
                            setEventDetails={setEventDetails}
                            onNextStep={onNextStep}
                        />
                    </Elements>)}

            </div>
        </div>
    );
};

export default DriverDetails;


// +44 117 2345678
// PO16 7GZ