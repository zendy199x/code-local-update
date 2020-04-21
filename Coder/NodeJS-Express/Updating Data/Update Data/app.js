const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true });
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Nodemon API");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});