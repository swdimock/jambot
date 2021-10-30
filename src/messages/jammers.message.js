const Helper = require("../helpers");
const Jammers = require("../controllers/jammers.controller");
const { channel, bot } = require("../config/bot");

exports.pickJammer = async () => {
  // Check if jammer exists
  // await Jammers.getCurrentJammer();

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
      () => bot.postMessageToChannel(channel, ":three: :two: :one:..."),
      1500
    );
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          `${jammer.name}!  It's you!  The chosen one! :tada:`
        ),
      2000
    );
  });
};

exports.rerollJammer = () => {
  Jammers.getRandomJammer().then((jammer) => {
    bot.postMessageToChannel(channel, "New jammer coming right up!");
    setTimeout(
      () =>
        bot.postMessageToChannel(
          channel,
          `It's ${jammer.name}!  We were saving the best for last!`
        ),
      2000
    );
  });
};

exports.addJammer = async (text) => {
  const slackUserName = Helper.extractUserFromString(text, "add jammer");
  const user = await bot.getUser(slackUserName);

  if (!user) {
    bot.postMessageToChannel(
      channel,
      `I have no clue who "${slackUserName}" is...`
    );
  } else {
    // Add the identified jammer to the list and message
    Jammers.addJammer({
      name: slackUserName,
      display_name: user.profile?.display_name,
      email: user.profile?.email
    }).then((jammer) => {
      // Post in the main channel
      bot.postMessageToChannel(
        channel,
        `Adding a new jammer... ${jammer.name}`
      );

      // Let the user know
      bot.postMessage(user.id, "Hey nerd.  You're a jammer now.");
    });
  }
};

exports.removeJammer = async (text) => {
  const slackUserName = Helper.extractUserFromString(text, "remove jammer");
  const user = await bot.getUser(slackUserName);

  if (!user) {
    bot.postMessageToChannel(
      channel,
      `Try again chief.  "${slackUserName}" isn't real.`
    );
  } else {
    Jammers.deleteJammer(slackUserName).then((result) => {
      if (!result) {
        bot.postMessageToChannel(
          channel,
          `Hold up, ${slackUserName} isn't an actual jammer!`
        );
      } else {
        bot.postMessageToChannel(
          channel,
          `${slackUserName} has been 86'ed from the jam.`
        );
      }
    });
  }
};

exports.showJammers = () => {
  Jammers.getJammers().then((jammers) => {
    const jammerList = jammers.map((jammer) => jammer.name).join(", ");
    bot.postMessageToChannel(channel, `Here are the jammers... ${jammerList}`);
  });
};
