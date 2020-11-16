const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "prG142sT9!5L7",
  database: "employee"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;