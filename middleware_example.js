const express = require("express");
const app = express();

app.use(function(req, res, next) {
  console.log("common middleware function was called!");
  next();
});

app.use("/users", function(req, res, next) {
  console.log("middleware function for /users was called!");
  next();
});

app.get("/users", function(req, res) {
  res.send("Here is a list of users:....");
});

app.get("/books", function(req, res) {
  res.send("Here is a list of books:....");
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
