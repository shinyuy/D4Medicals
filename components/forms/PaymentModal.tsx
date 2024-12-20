import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from 'react-toastify';
import { useCreateEventSessionMutation } from "../../redux/features/eventsApiSlice";
import { parse, format, add } from 'date-fns';




const PaymentModal = ({ isOpen, onClose, driverFormData, formData, setDriverFormData, setEventDetails, onNextStep }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [createEventSession, { /*isLoading*/ }] = useCreateEventSessionMutation();


    function convertToGoogleCalendarTimeslot(dateTime, timeSlot) {
        // Parse the date-time string (e.g., "2024-12-22T23:00:00.000Z")
        const date = dateTime.split("T")[0]; // Get the date part ("2024-12-22")

        // Parse the timeSlot (e.g. "08:00 AM - 08:15 AM")
        const timeParts = timeSlot.split(" - ");
        const startTime = timeParts[0].trim();
        const endTime = timeParts[1].trim();

        // Function to convert time in AM/PM format to 24-hour format
        function convertTo24HourFormat(time) {
            const [hours, minutes] = time.slice(0, -5).split(":"); // Remove AM/PM part
            const min = time.slice(3, 5)

            const period = time.slice(-2); // AM/PM part
            let hour = parseInt(hours, 10);

            if (period === "PM" && hour < 12) hour += 12;
            if (period === "AM" && hour === 12) hour = 0;

            return `${hour.toString().padStart(2, '0')}:${min}`;
        }

        // Convert start and end times to 24-hour format
        const start24Hour = convertTo24HourFormat(startTime);
        const end24Hour = convertTo24HourFormat(endTime);

        // Create full date-time strings for Google Calendar (e.g. "2024-12-22T08:00:00")
        const startDateTime = `${date}T${start24Hour}:00`; // Add seconds: "08:00:00"
        const endDateTime = `${date}T${end24Hour}:00`;

        // Return the event object with start and end times
        return {
            start: startDateTime,
            end: endDateTime
        };
    }


    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Call backend to create payment intent
            const { data: client_secret } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/booking/create-payment-intent/`, {
                amount: 5000, // Replace with dynamic amount
                currency: "gbp",
                description: `Medical Test Booking for ${driverFormData.firstName} ${driverFormData.lastName}`,
            });

            // Confirm payment with Stripe
            const card = elements.getElement(CardElement);
            const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret.client_secret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: `${driverFormData.firstName} ${driverFormData.lastName}`,
                        email: driverFormData.email,
                        phone: driverFormData.phone,
                    },
                },
            });

            if (error) throw new Error(error.message);

            onClose(); // Close the modal
            // Submit form data to backend

            await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/booking/driver-details/`, { ...driverFormData, ...formData });

            const dayDate = format(formData.date, 'yyyyMMdd')
            const dayDateStr = parse(dayDate, 'yyyyMMdd', new Date())
            const dateTime = add(dayDateStr, { days: 1 }).toISOString()  //dayDateStr.toISOString();

            const result = convertToGoogleCalendarTimeslot(dateTime, formData.timeSlot);

            const event = {
                'eventName': formData.medicalType + " Medical Test Booking",
                'location': formData.city,
                'centerId': formData.centerId,
                'eventDescription': 'Medical test booking',
                'start': {
                    'dateTime': result.start, //.toISOString(), // Date.toISOString() ->
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
                },
                'end': {
                    'dateTime': result.end, //.toISOString(), // Date.toISOString() ->
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
                },
                'email': driverFormData.email
            }
            const response = await createEventSession(event)
            if ('data' in response && response.data?.event) {

                toast.success('Booking done!');
                setEventDetails({
                    title: formData.medicalType + " Medical Test Booking",
                    date: dateTime,
                    time: result.start + " - " + result.end,
                    location: formData.city
                })
                onNextStep()
            } else {
                toast.error("Booking error")
            }

            setLoading(false)
            setDriverFormData({
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                phone: "",
                postCode: "",
                vehicleType: "",
                licenceType: "",
                termsAccepted: false,
            })
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Complete Payment</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div /*onSubmit={handlePayment}*/ className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Details
                        </label>
                        <div className="border rounded p-3 bg-gray-50">
                            <CardElement className="focus:outline-none" />
                        </div>
                    </div>
                    <button
                        onClick={handlePayment}
                        type="submit"
                        disabled={!stripe || loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 text-gray-500 hover:text-gray-700 text-sm underline"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;
