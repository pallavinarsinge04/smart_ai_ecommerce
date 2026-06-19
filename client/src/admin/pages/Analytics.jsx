
import { useEffect, useState } from "react";
import axios from "axios";

import AnalyticsCard from "../components/AnalyticsCard";

function Analytics() {

  const [data, setData] = useState({});

  useEffect(() => {

    axios

      .get("http://localhost:5000/api/analytics")

      .then((res) => setData(res.data));

  }, []);

  return (

    <div className="analytics-container">

      <h1>Sales Analytics</h1>

      <div className="analytics-grid">

        <AnalyticsCard

          title="Revenue"

          value={`₹${data.revenue || 0}`}

        />

        <AnalyticsCard

          title="Orders"

          value={data.totalOrders || 0}

        />

        <AnalyticsCard

          title="Users"

          value={data.totalUsers || 0}

        />

        <AnalyticsCard

          title="Products"

          value={data.totalProducts || 0}

        />

      </div>

    </div>

  );

}

export default Analytics;
