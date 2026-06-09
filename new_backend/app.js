const express = require("express");
const cors = require("cors");

const userRoutes =
require("./routes/userroutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const app = express();

app.use(cors());

app.use(express.json());

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