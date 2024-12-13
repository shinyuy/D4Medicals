'use client';
import { useState } from 'react';
import { useCreateCenterSessionMutation, useRetrieveCentersQuery } from '@/redux/features/centerApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const cities = [
    "Bath", "Birmingham", "Bradford", "Brighton & Hove", "Bristol", "Cambridge", "Canterbury", "Carlisle", "Chelmsford", "Chester", "Chichester", "Coventry", "Derby",
    "Durham", "Ely", "Exeter", "Gloucester", "Hereford", "Kingston upon Hull", "Lancaster", "Leeds", "Leicester", "Lichfield",
    "Lincoln", "Liverpool", "London", "Manchester", "Newcastle upon Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", "Portsmouth", "Preston",
    "Ripon", "Salford", "Salisbury", "Sheffield", "Southampton", "St Albans", "Stoke-on-Trent", "Sunderland", "Truro", "Wakefield", "Wells", "Westminster", "Winchester",
    "Wolverhampton", "Worcester", "York", "Armagh", "Belfast", "Londonderry", "Lisburn", "Newry", "Aberdeen", "Dundee", "Edinburgh", "Glasgow", "Inverness", "Perth", "Stirling", "Bangor", "Cardiff",
    "Newport", "St. Asaph", "St. David's", "Swansea"
]

export default function Page() {
    const router = useRouter();
    const [createCenterSession, { /*isLoading*/ }] = useCreateCenterSessionMutation();
    const [center, setCenter] = useState({
        centerName: "",
        location: "",
        earliestDate: "",
        fullAddress: "",
        openFrom: "",
        closesAt: ""
    })
    const { data: centersData, /*isFetching*/ } = useRetrieveCentersQuery('');
    const [create, setCreate] = useState(false)


    async function createTestCenter() {
        const response = await createCenterSession(center)
        console.log(response)
        if (response?.error?.data.message) {
            toast.error("Center creation error")
        }
        if (response?.data?.center) {
            setCenter({
                centerName: "",
                location: "",
                earliestDate: "",
                fullAddress: "",
                openFrom: "",
                closesAt: ""
            })
            toast.success("Center created")
        }
    }

    return (
        <>
            <main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8 min-h-[80vh]'>

                <h2 className='mb-[100px]'>D4 Medical Centers</h2>

                {create ?
                    <>
                        <div className="mb-6">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                Where is this test center/doctor located ?
                            </label>
                            <select
                                id="city"
                                onChange={(e) => setCenter({ ...center, location: e.target.value })}
                                className="block w-1/2 mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                                required
                            >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='w-/12'>
                            <p>Name of this center</p>
                            <input required className='w-1/2 rounded' value={center.centerName} type="text" onChange={(e) => setCenter({ ...center, centerName: e.target.value })} />
                            <p>Full address</p>
                            <input required className='w-1/2 rounded' value={center.fullAddress} type="text" onChange={(e) => setCenter({ ...center, fullAddress: e.target.value })} />
                            <p>Earliest available date</p>
                            <input required className='w-1/2 rounded' value={center.earliestDate} type="date" onChange={(e) => setCenter({ ...center, earliestDate: e.target.value })} />

                            <div className='flex w-1/2 justify-between'>
                                <div>
                                    <label>Open as from</label><br />
                                    <input required value={center.openFrom} className='rounded' onChange={(e) => setCenter({ ...center, openFrom: e.target.value })} aria-label="Date and time" type="time" />
                                </div>
                                <div>
                                    <label>Close</label><br />
                                    <input required value={center.closesAt} className='rounded' onChange={(e) => setCenter({ ...center, closesAt: e.target.value })} aria-label="Date and time" type="time" />
                                </div>
                            </div>
                            <hr />
                            <button className='bg-green-900 py-4 px-6 mt-12 text-white rounded' onClick={() => createTestCenter()}>Create Test Center</button>
                            <p></p>

                        </div>
                    </>
                    :
                    <div>
                        <button onClick={() => setCreate(!create)}>Create</button>
                        {centersData?.centers?.map((center, i) => {
                            return (
                                <div key={i} className="w-1/2 center-card border rounded-lg shadow-md p-4">
                                    <h2 className="text-xl font-semibold">{center.center_name}</h2>
                                    <p className="text-gray-600">Location: {center.location}</p>
                                    <p className="text-gray-600">Earliest Date: {center.earliest_date}</p>
                                    <p className="text-gray-600">Parking: {center.parking ? 'Available' : 'Not Available'}</p>
                                    <p className="text-gray-600">Address: {center.full_address}</p>
                                    <p className="text-gray-600">Open From: {center.open_from}</p>
                                    <p className="text-gray-600">Closes At: {center.closes_at}</p>
                                    <button
                                        onClick={() => router.push(`/dashboard/calendar?centerId=${center.id}&location=${center.location}`)}
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Add Availability
                                    </button>
                                </div>

                            )
                        })}
                    </div>

                }

            </main>
        </>
    );
}
