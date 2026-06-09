const db = require("../config/db");

exports.getDashboard = (req, res) => {

    // Allow only Super Admin
    if (req.user.role !== "SUPER_ADMIN") {
        return res.status(403).json({
            message: "Access Denied"
        });
    }

    const sql = `
        SELECT COUNT(*) AS totalStudents
        FROM users
        WHERE role = 'USER'
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json({
            totalStudents: result[0].totalStudents,
            totalEvents: 8,
            totalRegistrations: 240
        });

    });
};