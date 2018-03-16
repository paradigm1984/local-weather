"use strict";

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// allows the public folder to be static and displayed on the dom.
app.use(express.static(path.join(__dirname, "public")));
// console.log(path.join(__dirname, "public"));

const date = new Date();

app.listen(PORT, () => {
  console.log("App running on port " + PORT + " | Time: " + date);
})
