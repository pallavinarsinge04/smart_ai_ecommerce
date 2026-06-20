
import { useEffect, useState } from "react";
import { getLoyalty } from "../services/loyaltyService";
import LoyaltyCard from "../components/LoyaltyCard";

function Loyalty() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getLoyalty("USER_ID_HERE").then(res => setData(res.data));
    }, []);

    if (!data) return <h2>Loading...</h2>;

    return (
        <div className="loyalty-page">
            <h1>Loyalty Rewards</h1>

            <div className="loyalty-grid">
                <LoyaltyCard title="Points" value={data.points} />
                <LoyaltyCard title="Level" value={data.level} />
                <LoyaltyCard title="Total Spent" value={`₹${data.totalSpent}`} />
            </div>
        </div>
    );
}

export default Loyalty;

