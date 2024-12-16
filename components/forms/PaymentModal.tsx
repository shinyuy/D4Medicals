import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentModal = ({ isOpen, onClose, formData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Call backend to create payment intent
            const { data: client_secret } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/booking/create-payment-intent/`, {
                amount: 5000, // Replace with dynamic amount
                currency: "gbp",
                description: `Medical Test Booking for ${formData.firstName} ${formData.lastName}`,
            });

            // Confirm payment with Stripe
            const card = elements.getElement(CardElement);
            const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret.client_secret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        phone: formData.phone,
                    },
                },
            });

            if (error) throw new Error(error.message);

            console.log("Payment successful!", paymentIntent);
            onClose(); // Close the modal
            // Submit form data to backend
            await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/booking/driver-details`, formData);
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
