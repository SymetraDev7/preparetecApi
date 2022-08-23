const mysql = require("mysql2");

// create the connection to database
const conn = mysql.createConnection({
  host: "sql202.epizy.com",
  user: "epiz_32058904",
  database: "epiz_32058904_preparetec_api",
  password: "aY1jL9wY5dXj6t",
  port: 3306,
});

module.exports = conn;
