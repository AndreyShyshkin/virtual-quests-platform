const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello from the Virtual Quests Platform API!" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
