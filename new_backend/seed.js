require("dotenv").config();

const db = require("./config/db");
const seedSuperAdmin = require("./seeder/SuperAdminSeeders");

db.connect((err) => {

    if (err) {
        console.log(err);
    } else {

        console.log("Database Connected");

        seedSuperAdmin();

        process.exit();
    }
});