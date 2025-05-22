const express = require("express");
const cors = require("cors");
const booksData = require("../data/books.json");

const app = express();

app.use(cors());

app.get("/random-book", (req, res) => {
  res.json(booksData[Math.floor(Math.random() * booksData.length)]);
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server is running on port ${port}`));