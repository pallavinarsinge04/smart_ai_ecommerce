
import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

CartesianGrid

} from "recharts";

function SalesChart({ data }) {

    return (

        <LineChart width={700} height={350} data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="month"/>

            <YAxis/>

            <Tooltip/>

            <Line

                type="monotone"

                dataKey="sales"

                stroke="#0A2947"

            />

        </LineChart>

    );

}

export default SalesChart;
