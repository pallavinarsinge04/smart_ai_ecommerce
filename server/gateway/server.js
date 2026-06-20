import express from "express";
import httpProxy from "http-proxy-middleware";

const app = express();

// AUTH SERVICE
app.use("/api/auth", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:5001" });
});

// PRODUCT SERVICE
app.use("/api/products", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:5002" });
});

// ORDER SERVICE
app.use("/api/orders", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:5003" });
});

// PAYMENT SERVICE
app.use("/api/payment", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:5004" });
});

app.listen(5000, () => {
    console.log("API Gateway running on port 5000");
});