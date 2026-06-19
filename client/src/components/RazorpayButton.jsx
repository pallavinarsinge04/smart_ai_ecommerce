
import { createOrder } from "../services/paymentService";

function RazorpayButton({ amount }) {

    const payNow = async () => {

        const { data } = await createOrder(amount);

        const options = {

            key: import.meta.env.VITE_RAZORPAY_KEY,

            amount: data.amount,

            currency: data.currency,

            name: "Smart AI Ecommerce",

            description: "Order Payment",

            order_id: data.id,

            handler: function () {

                window.location = "/payment-success";

            }

        };

        const payment = new window.Razorpay(options);

        payment.open();

    };

    return (

        <button onClick={payNow}>

            Pay Now

        </button>

    );

}

export default RazorpayButton;
