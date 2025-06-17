import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "kokila2006", 
  database: "test"
});

app.get("/", (req, res) => {
    res.json("hello this is backend server");
});

app.get("/students", (req, res) => {
    const q = "SELECT * FROM students";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/students", (req, res) => {
    const q = "INSERT INTO students(`name`, `age`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.age,
        req.body.email,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete("/students/:id", (req, res) => {
    const studentId = req.params.id;
    const q = "DELETE FROM students WHERE id = ?";
    db.query(q, [studentId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put("/students/:id", (req, res) => {
    const studentId = req.params.id;
    const q = "UPDATE students SET `name` = ?, `age` = ?, `email` = ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.age,
        req.body.email
    ];

    db.query(q, [...values, studentId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8888, () => {
  console.log("Connected to backend server on port 8888");
});