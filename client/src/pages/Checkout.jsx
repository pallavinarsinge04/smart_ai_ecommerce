
import RazorpayButton from "../components/RazorpayButton";

function Checkout() {

    return (

        <div>

            <h1>

                Checkout

            </h1>

            <h2>

                Total ₹2500

            </h2>

            <RazorpayButton amount={2500} />

        </div>

    );

}

export default Checkout;
