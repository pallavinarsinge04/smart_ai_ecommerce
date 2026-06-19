import RazorpayButton from "../components/RazorpayButton";

function Checkout() {

  const total = 25999;

  return (

    <div>

      <h1>Checkout</h1>

      <h2>Total ₹{total}</h2>

      <RazorpayButton amount={total} />

    </div>

  );

}

export default Checkout;