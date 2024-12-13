import { useEffect, useState } from "react";
import Clock from "../utils/Clock"
import Calendar from "../utils/Calendar"
import { useRetrieveCentersByLocationQuery } from '@/redux/features/centerApiSlice';


const cities = [
    "Bath", "Birmingham", "Bradford", "Brighton & Hove", "Bristol", "Cambridge", "Canterbury", "Carlisle", "Chelmsford", "Chester", "Chichester", "Coventry", "Derby",
    "Durham", "Ely", "Exeter", "Gloucester", "Hereford", "Kingston upon Hull", "Lancaster", "Leeds", "Leicester", "Lichfield",
    "Lincoln", "Liverpool", "London", "Manchester", "Newcastle upon Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", "Portsmouth", "Preston",
    "Ripon", "Salford", "Salisbury", "Sheffield", "Southampton", "St Albans", "Stoke-on-Trent", "Sunderland", "Truro", "Wakefield", "Wells", "Westminster", "Winchester",
    "Wolverhampton", "Worcester", "York", "Armagh", "Belfast", "Londonderry", "Lisburn", "Newry", "Aberdeen", "Dundee", "Edinburgh", "Glasgow", "Inverness", "Perth", "Stirling", "Bangor", "Cardiff",
    "Newport", "St. Asaph", "St. David's", "Swansea"
]

const CitySelectionStep = ({ onNextStep, setFormData, formData }) => {
    const [selectedCity, setSelectedCity] = useState("");
    const [availableDoctors, setAvailableDoctors] = useState([]);
    const { data: centersData, /*isFetching*/ } = useRetrieveCentersByLocationQuery(selectedCity);


    useEffect(() => {
        if (centersData?.centers) {
            setAvailableDoctors(centersData.centers);
        } else {
            setAvailableDoctors([]); // Clear data if no centers available
        }
    }, [centersData]);

    const handleCitySelection = (city) => {
        setSelectedCity(city);
    };

    const handleBookNow = (doctor) => {
        console.log(`Booking with: ${doctor.name}`);
        setFormData({ ...formData, city: selectedCity })
        onNextStep(doctor);
    };

    return (
        <div className="">
            <h2 className="text-xl font-semibold mb-4">Step 2: Select a City</h2>

            {/* City Selection Dropdown */}
            <div className="mb-6">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Choose your city:
                </label>
                <select
                    id="city"
                    onChange={(e) => handleCitySelection(e.target.value)}
                    className="block w-full mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                >
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Doctors */}
            {selectedCity && (
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Available Doctors in {selectedCity}:
                    </h3>
                    {availableDoctors?.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-4">
                            {availableDoctors?.map((doctor, index) => (
                                <div
                                    key={index}
                                    className="p-2 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md flex flex-col justify-between w-1/2 h-40"
                                >
                                    <div className="flex justify-between">
                                        <h4 className="font-semibold text-green-700">
                                            {doctor.location}
                                        </h4>
                                        <button
                                            onClick={() => handleBookNow(doctor)}
                                            className="mt-4 text-xs px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-700"
                                        >
                                            Book now
                                        </button>
                                    </div>
                                    <p className="text-xs">{doctor.full_address}</p>

                                    <div className="flex justify-between">
                                        <div className="text-xs flex items-center">
                                            <Clock />
                                            <div className="ml-2">
                                                <span>Working Hours</span><br />
                                                <p className="text-xs text-green-900 font-bold">{doctor.open_from.slice(0, 5)} - {doctor.closes_at.slice(0, 5)}</p>
                                            </div>
                                        </div>
                                        <div className="text-xs flex items-center">
                                            <Calendar />
                                            <div className="ml-2">
                                                <span>Earliest Date</span><br />
                                                <p className="text-xs text-green-900 font-bold">{doctor.earliest_date}</p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">
                            No doctors available in {selectedCity} at the moment.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CitySelectionStep;
