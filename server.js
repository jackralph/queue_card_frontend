const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/views/index.html"))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "public/views/signup.html"))
})

app.get("/terms_and_conditions", (req, res) => {
    res.sendFile(path.join(__dirname, "public/views/terms_and_conditions.html"))
})

app.listen(3000);