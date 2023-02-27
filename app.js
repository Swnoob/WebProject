const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express')
const ejs = require("ejs");


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true
});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
