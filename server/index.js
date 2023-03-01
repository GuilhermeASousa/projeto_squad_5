const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudgames",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { developers } = req.body;
    const { description } = req.body;
    const { category } = req.body;
    const { repository } = req.body;
    const {view} = req.body;
    let mysql = "INSERT INTO games ( name, developers, description, category, repository, view) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(mysql, [name, developers, description, category, repository, view], (err, result) => {
        res.send(result);
    });
});

app.post("/search", (req, res) => {
    const { name } = req.body;
    const { developers } = req.body;
    const { description } = req.body;
    const { category } = req.body;
    const { repository } = req.body;
    const {view} = req.body;
    let mysql = "SELECT * FROM games WHERE name = ? AND developers = ? AND description = ? AND category = ? AND repository = ? AND view = ?";
    db.query(mysql, [name, developers, description, category, repository, view], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM games";
    db.query(mysql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { developers } = req.body;
    const { description } = req.body;
    const { category } = req.body;
    const { repository } = req.body;
    const {view} = req.body;
    let mysql = "UPDATE games SET name = ?, developers = ?, description = ?, category = ?, repository = ?, view = ? WHERE id = ?";
    db.query(mysql, [name, developers, description, category, repository, view, id], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM games WHERE id = ?";
    db.query(mysql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Rodando o Servidor na Porta 3001");
})