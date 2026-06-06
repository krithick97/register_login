const express = require("express");
const cors = require("cors");

const userRoutes =
require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes); //common calling of registration and logincd 

module.exports = app;