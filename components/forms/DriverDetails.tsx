import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentWrapper from "./PaymentModal";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QWeSwDgaWgRlwMxzXay5R7FHglYjMymwM2BwlykO6izceqB6tIvQPJ2GjXhLNsJLWSjpmZ3NbDrRhffNLZGAfe600r8XnM7B1");

const DriverDetails = () => {
    const [formData, setFormData] = useState({
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

    const [errors, setErrors] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);

    const postCodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.dob) newErrors.dob = "Date of birth is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "A valid email is required.";
        if (!formData.phone || formData.phone.length < 10)
            newErrors.phone = "A valid phone number is required.";
        if (!formData.postCode || !postCodeRegex.test(formData.postCode))
            newErrors.postCode = "A valid UK postcode is required.";
        if (!formData.vehicleType)
            newErrors.vehicleType = "Vehicle type is required.";
        if (!formData.licenceType)
            newErrors.licenceType = "Licence type is required.";
        if (!formData.termsAccepted)
            newErrors.termsAccepted = "You must accept the terms and conditions.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

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
                            value={formData.firstName}
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
                            value={formData.lastName}
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
                            value={formData.dob}
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
                            value={formData.email}
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
                            value={formData.phone}
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
                            value={formData.postCode}
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
                            value={formData.vehicleType}
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
                            value={formData.licenceType}
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
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                                I accept the terms and conditions
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
                            formData={formData}
                        />
                    </Elements>)}

            </div>
        </div>
    );
};

export default DriverDetails;


// +44 117 2345678
// PO16 7GZ