'use client';
import { useState } from 'react';
import { useCreateEventSessionMutation } from "../../../redux/features/eventsApiSlice";
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const params = useSearchParams()
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [createEventSession, { /*isLoading*/ }] = useCreateEventSessionMutation();
    const centerId = params.get('centerId')
    const location = params.get('location')

    async function createCalendarEvent() {
        console.log("Creating calendar event");
        const event = {
            'eventName': eventName,
            'location': location,
            'centerId': centerId,
            'eventDescription': eventDescription,
            'start': {
                'dateTime': start, //.toISOString(), // Date.toISOString() ->
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
            },
            'end': {
                'dateTime': end, //.toISOString(), // Date.toISOString() ->
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
            }
        }
        const response = await createEventSession(event)
        console.log(response)
        // if ('error' in response && response.error?.data?.message) {

        // }
        if ('data' in response && response.data?.event) {
            setEventName("")
            setEventDescription("")
            setStart("")
            setEnd("")
            toast.success("Event created")
        } else {
            toast.error("Event creation error")
        }
    }


    return (
        <>
            <main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8 min-h-[80vh]'>
                <h2 className='mb-[100px]'>Calendar Events</h2>
                <div className='flex w-1/2 justify-between'>
                    <div>
                        <label>Start time</label><br />
                        <input required value={start} className='rounded' onChange={(e) => setStart(e.target.value)} aria-label="Date and time" type="datetime-local" />
                    </div>
                    <div>
                        <label>End time</label><br />
                        <input required value={end} className='rounded' onChange={(e) => setEnd(e.target.value)} aria-label="Date and time" type="datetime-local" />
                    </div>
                </div>
                <div className='w-/12'>
                    <p>Event name</p>
                    <input required className='w-1/2 rounded' value={eventName} type="text" onChange={(e) => setEventName(e.target.value)} />
                    <p>Event description</p>
                    <textarea className='w-1/2 rounded' value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required></textarea>
                    <hr />
                    <button className='bg-green-900 py-4 px-6 mt-12 text-white rounded' onClick={() => createCalendarEvent()}>Create Calendar Event</button>
                    <p></p>

                </div>

            </main>
        </>
    );
}
