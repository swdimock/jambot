const Helper = require("../helpers");
const Jammers = require("../controllers/jammers.controller");
const { channel, bot } = require("../config/bot");

exports.pickJammer = async () => {
  // Check if jammer exists
  const currentJammer = await Jammers.getCurrentJammer();

  if (currentJammer) {
    bot.postMessageToChannel(
      channel,
      "Whoa, whoa, whoa.  We already have a jammer selected.  Cool your jets!"
    );
    return;
  }

  // Select a "random" jammer
  Jammers.getRandomJammer().then((jammer) => {
    bot.postMessageToChannel(channel, "Jam picker initiated...");
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          "Drumroll please! :drum_with_drumsticks:"
        ),
      1000
    );
    setTimeout(
      () => bot.postMessageToChannel(channel, ":three:... :two:... :one:..."),
      1500
    );
    setTimeout(
      () => {
        bot
          .postMessageToChannel(
            channel,
            jammer 
              ? `${jammer.profile?.display_name}!  It's you!  The chosen one! :tada:`
              : "So this is embarrasing.  I couldn't find anyone at all..."
          );
        bot
          .postMessageToUser(
            jammer.name,
            `Hey ${jammer.profile?.display_name}!  Quit slackin' and get to jammin'!  It's your turn #jam.`
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
    bot.postMessageToChannel(channel, "New jammer coming right up!");
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          jammer 
            ? `It's ${jammer.profile?.display_name}!  We were saving the best for last!` 
            : "I couldn't find anyone.  I'm not taking responsibility for this.  This is on you."
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
        ? `Temporary memory loss. human?  ${jammerFound.profile?.display_name} is today's jammer!` 
        : "What's wrong with you, human?  There's no jammer selected yet today."
    )
  })
}