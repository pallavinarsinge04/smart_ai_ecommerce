import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/auth-service");

app.use("/auth", authRoutes);

app.listen(5001, () => {
    console.log("Auth Service running on 5001");
});