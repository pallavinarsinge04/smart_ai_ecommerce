import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app.listen(5002, () => {
    console.log("Product Service running on 5002");
});