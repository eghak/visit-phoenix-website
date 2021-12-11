const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

app.get("/plan", (req, res) => {
    res.sendFile(path.join(__dirname, "../plan.html"));
  });

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});