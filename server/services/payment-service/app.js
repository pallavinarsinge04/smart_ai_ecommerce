import express from "express";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
app.use(express.json());

app.use("/payment", paymentRoutes);

app.listen(5004, () => {
    console.log("Payment Service running on 5004");
});