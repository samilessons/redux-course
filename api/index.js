const express = require("express");
const cors = require("cors");
const booksData = require("../data/books.json");

const app = express();

app.use(cors());

function getRandomBook() {
  return booksData[Math.floor(Math.random() * booksData.length)];
}

app.get("/random-book", (req, res) => {
  res.json(getRandomBook());
});

app.get("/random-book-delayed", (req, res) => {
  setTimeout(() => res.json(getRandomBook()), 3000);
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server is running on port ${port}`));