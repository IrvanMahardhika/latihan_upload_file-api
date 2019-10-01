var mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    password: "password",
    database: "latihan_upload_file",
    host: "localhost"
})

module.exports = db
