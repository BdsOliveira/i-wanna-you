const express = require("express");
const app = express();
const path = require("path");

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/pages/index.html'));
});

app.listen(3000, () => {
    console.log("Server running - PORT: 3000")
});