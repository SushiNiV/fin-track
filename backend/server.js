require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise"); // Use promise-based MySQL
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Database Connection
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "minatozak1",
  database: "fintrack_db"
};

let db;

// Connect to database
(async () => {
  try {
    db = await mysql.createConnection(dbConfig);
    console.log("✅ Connected to MySQL");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
})();

// 🔹 User Registration Route
app.post("/register", async (req, res) => {
  try {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
      return res.status(400).json({ error: "Username and Password are required" });
    }

    // Check if user already exists
    const [existingUsers] = await db.execute("SELECT * FROM Users WHERE Username = ?", [Username]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Insert new user
    await db.execute("INSERT INTO Users (Username, Password) VALUES (?, ?)", [Username, hashedPassword]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔹 Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});