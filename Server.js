const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// allows the public folder to be static and displayed on the dom.
app.use(express.static(__dirname + "/public"));


app.listen(PORT, () => {
  console.log("App running on port " + PORT);
})
