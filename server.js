const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to my project!");
});

app.get("/about", (req, res) => {
  res.send("I am going to add some info here!");
});

app.listen(port, () => {
  console.log(`Application started successfully on ${port}`);
});
