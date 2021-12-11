const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

app.get("/outdoor", (req, res) => {
    res.sendFile(path.join(__dirname, "../outdoor.html"));
  });

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});