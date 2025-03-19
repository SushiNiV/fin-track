require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
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

(async () => {
  try {
    db = await mysql.createConnection(dbConfig);
    console.log("Connected to MySQL");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();

//Registration
app.post("/register", async (req, res) => {
  try {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
      return res.status(400).json({ error: "Username and Password are required" });
    }

    const [existingUsers] = await db.execute("SELECT * FROM Users WHERE Username = ?", [Username]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    await db.execute("INSERT INTO Users (Username, Password) VALUES (?, ?)", [Username, hashedPassword]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// User Login Route
app.post("/login", async (req, res) => {
    try {
      const { Username, Password } = req.body;
      if (!Username || !Password) {
        return res.status(400).json({ error: "Username and Password are required" });
      }
  
      // Retrieve user from DB
      const [users] = await db.execute("SELECT * FROM Users WHERE LOWER(Username) = LOWER(?)", [Username]);
      
      if (users.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const user = users[0];
  
      // Compare input password with stored hashed password
      const passwordMatch = await bcrypt.compare(Password, user.Password);
      
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error in /login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});