import { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus } from "../../services/orderService";

function AdminOrders() {
    const [orders, setOrders] = useState([]);

    const load = () => {
        getAllOrders().then(res => setOrders(res.data));
    };

    useEffect(() => {
        load();
    }, []);

    const updateStatus = (id, status) => {
        updateOrderStatus(id, status).then(load);
    };

    return (
        <div className="admin-orders">
            <h1>Admin Orders</h1>

            {orders.map(order => (
                <div key={order._id} className="order-card">
                    <h3>{order._id}</h3>

                    <p>{order.orderStatus}</p>

                    <select onChange={(e) => updateStatus(order._id, e.target.value)}>
                        <option>Pending</option>
                        <option>Packed</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                    </select>
                </div>
            ))}
        </div>
    );
}

export default AdminOrders;