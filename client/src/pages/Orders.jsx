import { useEffect, useState } from "react";
import { getUserOrders } from "../services/orderService";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getUserOrders("USER_ID").then(res => setOrders(res.data));
    }, []);

    return (
        <div className="orders-page">
            <h1>My Orders</h1>

            {orders.map(order => (
                <div key={order._id} className="order-card">
                    <h3>Order ID: {order._id}</h3>
                    <p>Status: {order.orderStatus}</p>
                    <p>Total: ₹{order.totalAmount}</p>
                </div>
            ))}
        </div>
    );
}

export default Orders;