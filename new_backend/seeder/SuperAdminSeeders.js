const db = require("../config/db");
const bcrypt = require("bcryptjs");

const seedSuperAdmin = async () => {
    const email = "superadmin@gmail.com";
  // create super admin if not exists
    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, result) => {

            if (err) {
                console.log("SELECT Error:", err);
                return;
            }

            if (result.length > 0) {
                console.log("Super Admin Already Exists");
                return;
            }

            try {
                const password = await bcrypt.hash(
                    "Admin@123",
                    10
                );

                db.query(
                    `INSERT INTO users
                    (name, email, password, role)
                    VALUES (?, ?, ?, ?)`,
                    [
                        "Super Admin",
                        email,
                        password,
                        "SUPER_ADMIN"
                    ],
                    (err, insertResult) => {

                        if (err) {
                            console.log("INSERT Error:", err);
                            return;
                        }

                        console.log("Super Admin Seeded Successfully");
                        console.log(insertResult);
                    }
                );

            } catch (error) {
                console.log("Hash Error:", error);
            }
        }
    );
};

module.exports = seedSuperAdmin;