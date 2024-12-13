// components/BookingForm.js
"use client"
import { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import CitySelectionStep from "./CitySelectionStep"
import Calendar from "./Calendar"

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

const timeSlots = [
    "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM",
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
];

const events = [
    { title: 'Meeting', start: new Date() }
]

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        medicalType: "",
        city: "",
        date: "",
        timeSlot: "",
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateSelect = (selectInfo) => {
        const selectedDate = selectInfo.startStr;
        setFormData({ ...formData, date: selectedDate });
    };

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
                    // <div>
                    //     <h2 className="text-xl font-semibold mb-4">
                    //         Step 3: Choose Date and Time
                    //     </h2>
                    //     <FullCalendar
                    //         plugins={[dayGridPlugin, timeGridPlugin]}
                    //         initialView="timeGridWeek"
                    //         selectable
                    //         select={handleDateSelect}
                    //         events={[
                    //             { title: "Unavailable", start: "2024-11-29T09:00:00", allDay: false },
                    //             { title: "Unavailable", start: "2024-11-30T10:00:00", allDay: false },
                    //         ]}
                    //         height="auto"
                    //     />
                    // </div>
                    <Calendar location={formData.city} />
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Step 4: Select Time Slot
                        </h2>
                        <div className="grid grid-cols-4 gap-4">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() =>
                                        setFormData({ ...formData, timeSlot: slot })
                                    }
                                    className={`p-2 rounded-md text-center ${formData.timeSlot === slot
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200"
                                        } hover:bg-blue-100 hover:shadow-md transition`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
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



// // a custom render function
// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }