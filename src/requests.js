const Jammers = require("./controllers/jammers.controller.js");
const Jams = require("./controllers/jams.controller.js");
const Events = require("./controllers/jammed.controller.js");
const express = require("express");
const bodyParser = require("body-parser");

require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("¯\\_(ツ)_/¯");
});

app.get("/auth", (req, res) => {
  console.log('req', req);
  console.log('res', res);
});

app.listen(port, () => {
  console.log(`Speak to me on port ${port}.  I'm lonely.`);
});
