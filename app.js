const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/history", (req, res) => {
    res.render("pages/history");
});

app.get("/help", (req, res) => {
    res.render("pages/helpus");
});

app.get("/campaign", (req, res) => {
  res.render("pages/campaign");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
