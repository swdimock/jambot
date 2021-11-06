require("dotenv").config();
const SlackBot = require("slackbots");
const token = process.env.BOT_TOKEN;

exports.channel = "general";

// Configure the Bot
exports.bot = new SlackBot({
  token,
  name: "Jamtronic"
});
