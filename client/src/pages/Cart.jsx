import { useCart } from "../context/CartContext";
import "./Page.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page-container">

      <h1 className="page-title">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-card">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <>
          <div className="grid">

            {cart.map((item) => (
              <div className="item-card" key={item._id}>

                <img src={item.image} alt={item.name} />

                <h2>{item.name}</h2>

                <p>₹{item.price}</p>

                <p>Qty : {item.quantity}</p>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="summary-card">

            <h2>Total : ₹{total}</h2>

            <button className="checkout-btn">
              Proceed Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}