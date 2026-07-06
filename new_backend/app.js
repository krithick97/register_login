const express = require("express");
const cors = require("cors");
const helmet = require ("helmet");
const rateLimit = require ("express-rate-limit");

const userRoutes =
require("./routes/userroutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");
;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 15 minutes
  max: 2,                 // Maximum 100 requests
  message: {
    success: false,
    message: "Too many requests. Please try again after 2 minutes."
  }
});

app.use("/api",limiter);

app.use(
    "/api/users",
    userRoutes
);
app.use(
    "/api/dashboard",
    dashboardRoutes
)



app.get("/api", (req, res) => {
    res.json({
        status: "OK",
        message: "API is running",
    });
});

module.exports = app;