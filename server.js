const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("App listening on port ", port));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  //  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); or add your react app url.
  next();
});
