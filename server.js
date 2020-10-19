const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"))
})

app.get("/terms_and_conditions", (req, res) => {
    res.sendFile(path.join(__dirname, "terms_and_conditions.html"))
})

app.listen(3000);