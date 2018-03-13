const express = require("express");
const app = express();

app.get("/anything", function(req, res) {
  res.redirect("https://www.google.com");
});

app.get("/will-this-work", function(req, res) {
  res.redirect("www.google.com");
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
