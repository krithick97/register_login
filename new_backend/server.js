require("dotenv").config();

const app = require("./app");

const db =
require("./config/db");

const seedSuperAdmin =
require("./seeder/SuperAdminSeeders");

db.connect((err) => {

    if (err) {

        console.log(err);

    } else {

        console.log(
            "Database Connected"
        );

        seedSuperAdmin();

    }
});

app.listen(
    process.env.PORT,
    () => {

        console.log(
            `Server Running On Port ${process.env.PORT}`
        );

    }
);      //tell to run in this port