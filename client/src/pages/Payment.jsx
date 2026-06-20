import { useState } from "react";
import { createOrder } from "../services/paymentService";

function Payment() {
    const [amount, setAmount] = useState(1000);

    const payNow = async () => {
        const { data } = await createOrder({ amount });

        const options = {
            key: "YOUR_RAZORPAY_KEY",
            amount: data.amount,
            currency: data.currency,
            name: "Smart AI Ecommerce",
            order_id: data.id,
            handler: function (response) {
                alert("Payment Successful: " + response.razorpay_payment_id);
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="payment-page">
            <h1>Payment Gateway</h1>

            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={payNow}>
                Pay Now
            </button>
        </div>
    );
}

export default Payment;