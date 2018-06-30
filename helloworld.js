const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.post("/", function(req, res) {
  res.send(`Hello, i got a ${req.method} request`);
});

app.put("/", function(req, res) {
  res.send(`Hello, i got a ${req.method} request`);
});

app.delete("/", function(req, res) {
  res.send(`Hello, i got a ${req.method} request`);
});

const server = app.listen(PORT, function() {
  console.log(`You're listening to the smooth sounds of port ${PORT}...`);
});
