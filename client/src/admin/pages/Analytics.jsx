
import { useEffect, useState } from "react";

import axios from "axios";

import DashboardCard from "../components/DashboardCard";

import SalesChart from "../components/SalesChart";

function Analytics() {

    const [data, setData] = useState(null);

    useEffect(() => {

        axios

        .get("http://localhost:5000/api/analytics")

        .then(res => setData(res.data));

    }, []);

    if (!data) return <h2>Loading...</h2>;

    return (

        <div className="analytics">

            <h1>Analytics Dashboard</h1>

            <div className="cards">

                <DashboardCard

                    title="Revenue"

                    value={"₹" + data.revenue}

                />

                <DashboardCard

                    title="Orders"

                    value={data.orders}

                />

                <DashboardCard

                    title="Users"

                    value={data.users}

                />

                <DashboardCard

                    title="Products"

                    value={data.products}

                />

            </div>

            <SalesChart

                data={data.monthlySales}

            />

        </div>

    );

}

export default Analytics;
