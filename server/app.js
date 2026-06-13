import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRoutes);

export default app;