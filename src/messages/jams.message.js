const Jams = require("../controllers/jams.controller");
const Jammers = require("../controllers/jammers.controller");
const Jammed = require("../controllers/jammed.controller");
const Helper = require("../helpers");
const { lang, botTalk } = require("../config/lang");
const { channel, bot } = require("../config/bot");

exports.pickJam = async (data) => {
  // Confirm that the user is the chosen jammer
  const jammer = await Jammers.getCurrentJammer();
  const currentJamEvent = await Jammed.getJamEvent({
    created_at: {
      $gt: new Date().setHours(0, 0, 0, 0)
    }
  });

  // See if a jammer has been picked yet
  if (!jammer) {
    bot.postMessageToChannel(
      channel,
      botTalk(lang.BOT.JAMS.NOJAMMER)
    );
    return;
  }

  // Get the jammer's Slack info so we can personalize this
  const jammerId = jammer.jammerId[0];
  const jammerList = Jammers.getJammerList();

  // Make sure that the jammer asking is the one that was picked
  const jammerData = jammerList.find(user => jammerId === user.id);
  
  if (jammerId !== data.user) {
    bot.postMessageToChannel(
      channel,
      botTalk(lang.BOT.JAMS.STOLENJAM, [jammerData.profile.display_name])
    );
    return;
  }

  // See if a jam has already been added for the day
  if (currentJamEvent[0]?.jamId.length > 0) {
    bot.postMessageToChannel(
      channel,
      botTalk(lang.BOT.JAMS.JAMISTHERE)
    );
    return;
  }

  // Extract the URL video param
  const urlString = Helper.extractUrlFromString(data.text);
  const url = new URL(urlString);
  const videoIdParam = url.searchParams.get("v");

  // Get the youtube video meta if the param exists
  if (videoIdParam) {
    Jams.addJam(videoIdParam).then(async (jam) => {
      if (!jam) {
        bot.postMessageToChannel(
          channel,
          botTalk(lang.BOT.JAMS.CANTFINDJAM)
        );
        return;
      }
      // When the jam is added, get it's ID and update the event with the user ID
      Jammed.addJamEvent(currentJamEvent[0]._id, { jamId: jam._id, jammerId: currentJamEvent[0]?.jammerId });

      // Jam out!!!
      bot.postMessageToChannel(
        channel,
        botTalk(lang.BOT.JAMS.FOUNDJAM, [jammerData.profile.display_name, jam.title])
      );
    });
  }
};
