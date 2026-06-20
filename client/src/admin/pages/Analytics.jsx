import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import AnalyticsCard from "../../components/AnalyticsCard";
import { getAnalytics } from "../../services/analyticsService";

const socket = io("http://localhost:5000");

function Analytics() {
    const [data, setData] = useState(null);
    const [live, setLive] = useState({});

    useEffect(() => {
        getAnalytics().then(res => setData(res.data));

        socket.on("analytics:update", (data) => {
            setLive(data);
        });

        return () => socket.disconnect();
    }, []);

    if (!data) return <h2>Loading...</h2>;

    return (
        <div className="analytics-page">
            <h1>📊 Real-Time Analytics Dashboard</h1>

            <div className="grid">
                <AnalyticsCard title="Revenue" value={live.revenue || data.revenue} />
                <AnalyticsCard title="Active Users" value={live.activeUsers || data.users} />
                <AnalyticsCard title="Orders" value={live.orders || data.orders} />
                <AnalyticsCard title="Conversion Rate" value={data.conversionRate + "%"} />
            </div>
        </div>
    );
}

export default Analytics;