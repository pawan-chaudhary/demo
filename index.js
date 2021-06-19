const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Pawan Chaudhary",
    email: "pawan.email.com",
  });
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
