const mysql = require("mysql2");

// create the connection to database
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "preparetec",
  password: "",
  // host: "srv64.prodns.com.br",
  // user: "hallt147_banco",
  // database: "hallt147_banco",
  // password: "banco123",
  port: 3306,
});

module.exports = conn;
