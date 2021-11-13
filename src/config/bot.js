require("dotenv").config();
const SlackBot = require("slackbots");
const System = require("../controllers/system.controller.js");
const token = process.env.BOT_TOKEN;

exports.channel = 'jam';

// Configure the Bot
exports.bot = new SlackBot({
  token,
  name: "Jambot"
});
