import { useOrder } from "../context/OrderContext";
import "./Page.css";

export default function Orders() {
  const { orders } = useOrder();

  return (
    <div className="page-container">

      <h1 className="page-title">
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="empty-card">
          <h2>No Orders Yet</h2>
        </div>
      ) : (
        <div className="grid">

          {orders.map((order) => (
            <div className="item-card" key={order._id}>

              <h2>{order.name}</h2>

              <p>₹{order.price}</p>

              <p>Status :</p>

              <span className="status">
                Delivered
              </span>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}