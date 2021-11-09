const Helper = require("../helpers");
const Jams = require("../controllers/jams.controller");
const System = require("../controllers/system.controller");
const { channel, bot } = require("../config/bot");
const { lang } = require("../config/lang");

exports.getStats = () => {
  // ? Number of jams
  // Number of emojis given by user
  // Jam response time
  bot.postMessageToChannel(channel, "Here are the stats...");

  setTimeout(
    () => bot.postMessageToChannel(channel, "Syke!  Human, I don't devulge any of my secrets."),
    1500
  );
};

exports.setChannel = (data) => {
  const channelName = data.text.match(/(?<=\|)(.*?)(?=\>)/)[0];
  if (channelName) {
    System.setChannel(channelName);
  }
};

exports.getChallenge = () => {
  bot.postMessageToChannel(channel, "Here's today's challenge...");
  const challenges = lang.CHALLENGES;
  const selection = Math.floor(Math.random() * challenges.length);
  setTimeout(
    () => bot.postMessageToChannel(channel, "Hang on, I need to access my long-term memory..."),
    1500
  );
  setTimeout(
    () => bot.postMessageToChannel(channel, "Uh... okay... whatever.  I can't find anything, so just..."),
    2000
  );
  setTimeout(
    () => bot.postMessageToChannel(channel, challenges[selection]),
    2500
  );
};

exports.getCommandList = () => {
  [lang.JAMMER, lang.SYSTEM].forEach(category => {
    for (let command in category) {
      if (category.hasOwnProperty(command)) {
      bot.postMessageToChannel(channel, category[command]);
      }
    }
  });
}
