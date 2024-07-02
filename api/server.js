const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.get("/api/areas", (req, res) => {
  res.sendFile(path.join(__dirname, "resources", "areas.json"));
});

app.get("/api/things", (req, res) => {
  res.sendFile(path.join(__dirname, "resources", "things.json"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
