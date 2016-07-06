const express = require("express");
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hi</h1>');
});
