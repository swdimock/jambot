const Jammers = require("./controllers/jammers.controller.js");
const Jams = require("./controllers/jams.controller.js");
const Events = require("./controllers/jammed.controller.js");
const Auth = require("./controllers/auth.controller");
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

app.get("/auth", async (req, res) => {
  const token = await Auth.grantSlackAccessToken(req.code);
  console.log('req.code', req.query.code);
  console.log('token', token);
  res.send('authed!');
});

app.listen(port, () => {
  console.log(`Speak to me on port ${port}.  I'm lonely.`);
});
