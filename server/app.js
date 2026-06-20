import express from "express";
import cors from "cors";
import recommendationRoutes from "./routes/recommendationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js"; 
import couponRoutes from "./routes/couponRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js"; 

import analyticsRoutes from "./routes/analyticsRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js"; 
import sellerProductRoutes from "./routes/sellerProductRoutes.js"; 
import sellerOrderRoutes from "./routes/sellerOrderRoutes.js"; 

import payoutRoutes from "./routes/payoutRoutes.js";
import returnRoutes from "./routes/returnRoutes.js"; 
import invoiceRoutes from "./routes/invoiceRoutes.js"; 
import shipmentRoutes from "./routes/shipmentRoutes.js"; 
import deliveryRoutes from "./routes/deliveryRoutes.js";

app.use("/api/delivery",deliveryRoutes);
app.use("/api/shipment",shipmentRoutes);
app.use("/api/invoices",invoiceRoutes);
app.use("/api/returns",returnRoutes);
app.use("/api/payouts",payoutRoutes);


app.use("/api/seller-orders",sellerOrderRoutes);
app.use("/api/seller-products",sellerProductRoutes);
app.use("/api/sellers",sellerRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use( "/api/notifications", notificationRoutes );
app.use("/api/coupons",couponRoutes);

app.use("/api/inventory",inventoryRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/sellers", sellerRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/recommendations", recommendationRoutes);
const app = express();
import couponRoutes from "./routes/couponRoutes.js";

app.use("/api/coupons", couponRoutes);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;