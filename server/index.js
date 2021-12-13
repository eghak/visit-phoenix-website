const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public"));
  });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../home.html"));
// });

// app.get("/homecss", (req, res) => {
//     res.sendFile(path.join(__dirname, "../styleshome.css"));
//   });

//   app.get("/outdoor", (req, res) => {
//     res.sendFile(path.join(__dirname, "../outdoor.html"));
//   });
  
//   app.get("/outdoorcss", (req, res) => {
//       res.sendFile(path.join(__dirname, "../stylesoutdoor.css"));
//     });

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});