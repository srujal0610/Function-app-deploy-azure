const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: "mymysqlserver.mysql.database.azure.com",
  user: "myadmin",
  password: "MyPassword123!",
  database: "your-database-name",
  ssl: { rejectUnauthorized: true },
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL!");
});

app.get("/", (req, res) => {
  res.send("Hello, Azure Functions with Node.js!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
