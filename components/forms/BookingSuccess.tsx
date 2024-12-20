import { useRouter } from 'next/router';

const EventSuccess = ({ eventDetails }) => {

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-white rounded-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">Event Successfully Created!</h1>
                <p className="text-gray-700 text-center mb-6">Your event has been created/booking confirmed successfully. You will receive a confirmation email</p>
                <div className="bg-gray-50 border rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-2">Event Details:</h3>
                    <p className="text-gray-600"><strong>Title:</strong> {eventDetails?.title || 'N/A'}</p>
                    <p className="text-gray-600"><strong>Date:</strong> {eventDetails?.date || 'N/A'}</p>
                    <p className="text-gray-600"><strong>Time:</strong> {eventDetails?.time || 'N/A'}</p>
                    <p className="text-gray-600"><strong>Location:</strong> {eventDetails?.location || 'N/A'}</p>
                </div>
                <div className="flex justify-between">

                </div>
            </div>
        </div>
    );
};

export default EventSuccess;
