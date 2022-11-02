const express = require("express");
const app = express();
const path = require("path");

const mailRoutes = require('./routes/mailRoutes');

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/pages/index.html'));
});

app.use('/mail', mailRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running - PORT: 3000")
});