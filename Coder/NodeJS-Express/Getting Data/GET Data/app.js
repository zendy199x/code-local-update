const express = require("express");
const mongoose = require("mongoose");

const app = express();
// const db = mongoose.connect('mongodb://localhost:27017/testing', {useNewUrlParser: true});
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true });
bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
});
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Nodemon API");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
