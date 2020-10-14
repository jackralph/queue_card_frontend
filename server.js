const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/about.html"))
})

app.listen(3000);