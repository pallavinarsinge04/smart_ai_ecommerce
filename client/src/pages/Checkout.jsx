import { useState } from "react";
import { applyCoupon } from "../services/couponService";

function Checkout() {
    const [code, setCode] = useState("");
    const [total] = useState(2000);
    const [result, setResult] = useState(null);

    const apply = () => {
        applyCoupon({ code, total }).then(res => setResult(res.data));
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <input
                placeholder="Enter Coupon Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />

            <button onClick={apply}>Apply Coupon</button>

            {result && (
                <div>
                    <h3>Discount: ₹{result.discount}</h3>
                    <h2>Final: ₹{result.finalAmount}</h2>
                </div>
            )}
        </div>
    );
}

export default Checkout;