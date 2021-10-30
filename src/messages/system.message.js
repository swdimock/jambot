const Helper = require("../helpers");
const Jams = require("../controllers/jams.controller");
const { channel, bot } = require("../config/bot");

exports.getStats = () => {
  // ? Number of jams
  // Number of emojis given by user
  // Jam response time
  bot.postMessageToChannel(channel, "Here are the stats...");
};

exports.getChallenge = () => {
  bot.postMessageToChannel(channel, "Here's today's challenge...");
};
