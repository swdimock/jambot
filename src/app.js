const SlackBot = require("slackbots");
const JammersMessage = require("./messages/jammers.message");
const JamsMessage = require("./messages/jams.message");
const SystemMessage = require("./messages/system.message");
const { lang } = require("./config/lang");
const { channel, bot } = require("./config/bot");

require("./config/db");

bot.on("start", () => {
  bot.postMessageToChannel(channel, "Ready to rock!!");

  // TODO: Check if configuration exists, if not get the setup
  // What channel to use?
  // Output commands.
});

bot.on("message", (data) => {
  if (data.type !== "message") {
    return;
  }
  handleMessage(data.text, data);
});

const handleMessage = async (text, data) => {
  if (text.includes(`${lang.JAMMER.GET}`)) {
    JammersMessage.pickJammer();
  }

  if (text.includes(lang.JAMMER.UPDATE)) {
    JammersMessage.rerollJammer();
  }

  if (text.includes(lang.JAMMER.CREATE)) {
    JammersMessage.addJammer(text);
  }

  if (text.includes(lang.JAMMER.DELETE)) {
    JammersMessage.removeJammer(text);
  }

  if (text.includes(lang.JAMMER.LIST)) {
    JammersMessage.showJammers();
  }

  if (text.includes(lang.JAM.GET)) {
    JamsMessage.pickJam(data);
  }

  // TODO
  if (text.includes(lang.SYSTEM.STATS)) {
    SystemMessage.getStats();
  }

  // TODO
  if (text.includes(lang.SYSTEM.CHALLENGE)) {
    SystemMessage.getChallenge();
  }
};
