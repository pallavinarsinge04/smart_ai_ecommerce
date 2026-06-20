import express from "express";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

app.use("/orders", orderRoutes);

app.listen(5003, () => {
    console.log("Order Service running on 5003");
});