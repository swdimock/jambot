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
  res.status(200).send("¯\\_(ツ)_/¯");
});

app.get("/auth", async (req, res) => {
  let token;

  // Generate the token
  try {
    token = await Auth.grantSlackAccessToken(req.query.code);
  } catch (error) {
    res.status(500).send(`Failed: ${JSON.stringify(error)}`);
  }

  // Get the status
  if (!token.data.ok) {
    res.status(500).send(`Error: ${token.data.error}`);
  } else {
    // Save the access_token
    // token.data.access_token
    // token.data.bot_access_token
    res.status(200).send(`By Jove!  You've done it!  Enabled at ${token.data.team_name}.`);
  }
});

app.listen(port, () => {
  console.log(`Speak to me on port ${port}.  I'm lonely.`);
});
