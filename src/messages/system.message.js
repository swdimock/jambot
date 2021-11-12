const System = require("../controllers/system.controller");
const { channel, bot } = require("../config/bot");
const { lang, botTalk } = require("../config/lang")

exports.getStats = () => {
  // ? Number of jams
  // Number of emojis given by user
  // Jam response time
  bot.postMessageToChannel(channel, botTalk(lang.BOT.SYSTEM.STATS));

  setTimeout(
    () => bot.postMessageToChannel(channel, botTalk(lang.BOT.SYSTEM.NOSTATS)),
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
  bot.postMessageToChannel(channel, botTalk(lang.BOT.SYSTEM.CHALLENGE));
  const challenges = lang.CHALLENGES;
  const selection = Math.floor(Math.random() * challenges.length);
  setTimeout(
    () => bot.postMessageToChannel(channel, botTalk(lang.BOT.SYSTEM.CHALLENGESTALL1)),
    1500
  );
  setTimeout(
    () => bot.postMessageToChannel(channel, botTalk(lang.BOT.SYSTEM.CHALLENGESTALL2)),
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
