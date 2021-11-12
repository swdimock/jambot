const Jammers = require("../controllers/jammers.controller");
const { lang, botTalk } = require("../config/lang");
const { channel, bot } = require("../config/bot");

exports.pickJammer = async () => {
  // Check if jammer exists
  const currentJammer = await Jammers.getCurrentJammer();

  if (currentJammer) {
    bot.postMessageToChannel(
      channel,
      botTalk(lang.BOT.JAMMERS.STOLENJAMMER)
    );
    return;
  }

  // Select a "random" jammer
  Jammers.getRandomJammer().then((jammer) => {
    bot.postMessageToChannel(channel, botTalk(lang.BOT.JAMMERS.FINDJAMMERS));
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          botTalk(lang.BOT.JAMMERS.FINDJAMMERSTALL1)
        ),
      1000
    );
    setTimeout(
      () => bot.postMessageToChannel(channel, botTalk(lang.BOT.JAMMERS.FINDJAMMERSTALL2)),
      1500
    );
    setTimeout(
      () => {
        bot
          .postMessageToChannel(
            channel,
            jammer 
              ? botTalk(lang.BOT.JAMMERS.PICKEDJAMMER, [jammer.profile?.display_name])
              : botTalk(lang.BOT.JAMMERS.NOJAMMER)
          );
        bot
          .postMessageToUser(
            jammer.name,
            botTalk(lang.BOT.JAMMERS.NOTIFYJAMMER, [jammer.profile?.display_name])
          );
      },
      2000
    );
    // Set the chosen jammer to today
    if (jammer) {
      Jammers.setDailyJammer(jammer);
    }
  });
};

exports.rerollJammer = () => {
  Jammers.getRandomJammer().then((jammer) => {
    bot.postMessageToChannel(channel, botTalk(lang.BOT.JAMMERS.REROLLJAMMER));
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          jammer 
            ? botTalk(lang.BOT.JAMMERS.PICKEDREROLL, [jammer.profile?.display_name])
            : botTalk(lang.BOT.JAMMERS.NOREROLL)
        ),
      2000
    );
    // Set the chosen jammer to today
    if (jammer) {
      Jammers.setDailyJammer(jammer);
    }
  });
};

exports.currentJammer = () => {
  Jammers.getCurrentJammer().then((jammer) => {
    const jammerId = jammer?.jammerId[0];
    const jammers = Jammers.getJammerList();
    const jammerFound = jammers.find((jamz) => jamz.id === jammerId)
    
    bot.postMessageToChannel(
      channel,
      jammerFound 
        ? botTalk(lang.BOT.JAMMERS.JAMMERSET, [jammerFound.profile?.display_name])
        : botTalk(lang.BOT.JAMMERS.JAMMERNOTSET)
    )
  })
};