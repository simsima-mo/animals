const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// إعداد الاتصال بقاعدة البيانات
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // استخدم اسم المستخدم الخاص بقاعدة البيانات
  password: "", // كلمة المرور الخاصة بقاعدة البيانات
  database: "ANIMALIS",
});

// التحقق من الاتصال بقاعدة البيانات
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database!");
  }
});

// إعداد body-parser للتعامل مع البيانات المرسلة عبر JSON
app.use(bodyParser.json());

// معالجة تسجيل الدخول
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM utilisateurs WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Error connecting to database." });
    if (results.length === 0) {
      return res.status(404).json({ message: "Email not found." });
    }

    const user = results[0];
    bcrypt.compare(password, user.mot_de_passe, (err, isMatch) => {
      if (err) return res.status(500).json({ message: "Error comparing password." });
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password." });
      }
      res.status(200).json({ message: "Login successful!", user });
    });
  });
});

// معالجة التسجيل الجديد
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: "Error hashing password." });

    db.query(
      "INSERT INTO utilisateurs (nom_utilisateur, email, mot_de_passe) VALUES (?, ?, ?)",
      [firstName + " " + lastName, email, hashedPassword],
      (err, results) => {
        if (err) return res.status(500).json({ message: "Error registering user." });
        res.status(201).json({ message: "Account created successfully!" });
      }
    );
  });
});

// بدء الخادم على المنفذ 5000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

const cors = require('cors');
app.use(cors());