const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/homecss", (req, res) => {
  res.sendFile(path.join(__dirname, "../styleshome.css"));
});

app.get("/outdoor", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/outdoor.html"));
});

app.get("/outdoorcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../stylesoutdoor.css"));
});

app.get("/family", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/family.html"));
});

app.get("/familycss", (req, res) => {
  res.sendFile(path.join(__dirname, "../stylesfamily.css"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shop.html"));
});

app.get("/shopcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../stylesshop.css"));
});

app.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/food.html"));
});

app.get("/foodcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../stylesfood.css"));
});

app.get("/plan", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/plan.html"));
});

app.get("/plancss", (req, res) => {
  res.sendFile(path.join(__dirname, "../stylesplan.css"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
