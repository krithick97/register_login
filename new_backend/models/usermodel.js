const db = require("../config/db");

const createUser = (userData, callback) => {

    const sql =
    `INSERT INTO users          
    (name,email,password,role)
    VALUES (?,?,?,?)`;             //tells that the infomartion that should be stored in this typa database

    db.query(
        sql,
        [
            userData.name,
            userData.email,
            userData.password,
            userData.role
        ],
        callback
    );
};

module.exports = {
    createUser
};