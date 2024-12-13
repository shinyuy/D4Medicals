"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { parse, format, add } from 'date-fns';
import { useCreateEventsSessionMutation } from "@/redux/features/eventsApiSlice";

export default function Calendar({ location }) {
    const [selected, setSelectedDate] = useState<Date>();
    const [slots, setAvailableSlots] = useState(); // list of available slots returned from server
    const [timetableError, setTimetableError] = useState<string>(""); // because bad things can happen
    const [isTimeTableLoading, setIsTimeTableLoading] = useState(false); // because it takes time to fetch data from server, add a spinner while we fetch
    const [createEventsSession, { /*isLoading*/ }] = useCreateEventsSessionMutation();


    const handleDayPickerSelect = async (date: Date | undefined) => {
        setTimetableError("")
        if (!date) {
            setSelectedDate(undefined);
            setAvailableSlots([]);
        } else {
            if (date.getDay() == 0 || date.getDay() == 6 || date < new Date()) { // we do not take meeting on saturday nor sunday and neither for past dates
                setSelectedDate(undefined);
                setAvailableSlots([]);
            } else {
                setSelectedDate(date);
                setIsTimeTableLoading(true);
                try {
                    const dayDate = format(date, 'yyyyMMdd')
                    const dayDateStr = parse(dayDate, 'yyyyMMdd', new Date())
                    const timeMin = dayDateStr.toISOString();

                    const timeMax = add(dayDateStr, { days: 1 }).toISOString();

                    const response = await createEventsSession({ timeMin, timeMax, location }); // go fetch data on server
                    const events = response?.data?.events || [];

                    setAvailableSlots(events);
                } catch (error) {
                    console.error(error)
                    setTimetableError("Failed to fetch available slots. Please try again.");
                } finally {
                    setIsTimeTableLoading(false);
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-center py-10">
            <form name="meeting-invitation-form" className="flex flex-col gap-4">
                {/* {showMessage && state.message && (
                    <p className="text-green-500 text-md mt-2">{state.message}</p>
                )} */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <DayPicker
                        mode="single"
                        required
                        selected={selected}
                        onSelect={handleDayPickerSelect}
                    />
                    <input
                        id="selectedCalendarDate"
                        name="selectedCalendarDate"
                        type="hidden"
                        value={selected ? selected.toLocaleDateString() : ""}
                    />

                    <div className="sm:ms-7 sm:ps-5 sm:border-s border-gray-200 dark:border-gray-800 w-full sm:max-w-[15rem] mt-5 sm:mt-0">
                        <h3 className="text-gray-900  text-base font-medium mb-3 text-center">
                            {selected ? selected.toLocaleDateString() : "Select a Date First"}
                        </h3>
                        <button
                            type="button"
                            data-collapse-toggle="timetable"
                            className="inline-flex items-center w-full py-2 px-5 me-2 justify-center text-sm font-medium text-white focus:outline-none bg-green-900 rounded-lg  hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-green-800 text-white hover:bg-green-700"
                        >
                            <svg
                                className="w-4 h-4 text-gray-800 text-white me-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Pick An Available Time
                        </button>
                        <label className="sr-only">Pick a time</label>
                        <ul id="timetable" className="grid w-full grid-cols-2 gap-2 mt-5">
                            {slots?.length > 0 && slots?.map((slot, i) => {

                                return (
                                    <li key={i}>
                                        <input
                                            type="radio"
                                            id="1"
                                            value="8:00"
                                            className="hidden peer"
                                            name="timetable"
                                        />
                                        <label
                                            htmlFor="1"
                                            className="inline-flex items-center justify-center w-[110px] p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-green-900 border-green-900 peer-checked:border-green-900 peer-checked:bg-green-900 hover:text-white peer-checked:text-white hover:bg-green-900"
                                        >
                                            {slot.start.slice(11, 16)} - {slot.end.slice(11, 16)}
                                        </label>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}