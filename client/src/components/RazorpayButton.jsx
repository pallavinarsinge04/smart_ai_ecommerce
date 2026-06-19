
import { createPayment } from "../services/paymentApi";

function RazorpayButton({ amount }) {

  const payNow = async () => {

    const { data } = await createPayment(amount);

    const options = {

      key: "YOUR_RAZORPAY_KEY",

      amount: data.amount,

      currency: data.currency,

      name: "Smart AI Ecommerce",

      order_id: data.id,

      handler: function () {

        alert("Payment Successful");

        window.location.href = "/payment-success";

      },

    };

    const razor = new window.Razorpay(options);

    razor.open();

  };

  return (
    <button onClick={payNow}>
      Pay ₹{amount}
    </button>
  );
}

export default RazorpayButton;
