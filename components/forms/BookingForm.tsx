// components/BookingForm.js
"use client"
import { useState } from "react";
import CitySelectionStep from "./CitySelectionStep"
import Calendar from "./Calendar"
import DriverDetails from "./DriverDetails";

const medicalTypes = [
    {
        id: "taxi",
        label: "Taxi/Private Hire",
        details: "Medical for taxi/private hire drivers.",
    },
    {
        id: "hgv",
        label: "HGV/Lorry/Bus Drivers",
        details: "Medical for HGV, lorry, and bus drivers.",
    },
    {
        id: "c1",
        label: "C1/Ambulance",
        details: "Medical for C1 and ambulance drivers.",
    },
    {
        id: "motorhome",
        label: "Motor Home",
        details: "Medical for motor home drivers.",
    },
];


export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        medicalType: "",
        city: "",
        date: "",
        timeSlot: "",
        centerId: "",
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Booking confirmed!");
    };


    console.log(formData)

    return (
        <div className="max-w-4xl py-12 mx-auto p-6 rounded-lg  md:min-h-[80vh]">
            {/* Step Indicator */}
            <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                    Step {step} of 6
                </p>
                <progress
                    value={step}
                    max="6"
                    className="w-full h-2 rounded bg-gray-300"
                />
            </div>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Step 1: Select Medical Type
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {medicalTypes.map((type) => (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() =>
                                        setFormData({ ...formData, medicalType: type.label })
                                    }
                                    className={`p-4 rounded-lg shadow-md border ${formData.medicalType === type.label
                                        ? "border-green-500 bg-green-50"
                                        : "border-gray-300 bg-white"
                                        } hover:shadow-lg transition`}
                                >
                                    <h3 className="text-lg font-medium">{type.label}</h3>
                                    <p className="text-sm text-gray-600">{type.details}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <CitySelectionStep onNextStep={handleNext} setFormData={setFormData} formData={formData} />
                )}


                {step === 3 && (
                    <Calendar location={formData.city} centerId={formData.centerId} formData={formData} setFormData={setFormData} />
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Step 4: Fill your details
                        </h2>
                        <DriverDetails />
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-300 text-gray-700 px-6
                             py-2 rounded-full"
                        >
                            Back
                        </button>
                    )}
                    {step < 6 && step != 2 && (
                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={
                                (step === 1 && !formData.medicalType) ||
                                (step === 3 && !formData.date)
                            }
                            className="bg-green-900 text-white px-8 py-2 rounded-full"
                        >
                            Next
                        </button>
                    )}
                    {step === 6 && (
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Confirm Booking
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
