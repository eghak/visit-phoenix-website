const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/homecss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/styleshome.css"));
});

app.get("/outdoor", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/outdoor.html"));
});

app.get("/outdoorcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stylesoutdoor.css"));
});

app.get("/family", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/family.html"));
});

app.get("/familycss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stylesfamily.css"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shop.html"));
});

app.get("/shopcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stylesshop.css"));
});

app.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/food.html"));
});

app.get("/foodcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stylesfood.css"));
});

app.get("/plan", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/plan.html"));
});

app.get("/plancss", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stylesplan.css"));
});

app.get("/planjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.js"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
