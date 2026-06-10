const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const helmet = require("helmet");

const compression = require("compression");

const morgan = require("morgan");

const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;