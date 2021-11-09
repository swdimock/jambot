// const Helper = require("../helpers");
const Jams = require("../controllers/jams.controller");
const Jammers = require("../controllers/jammers.controller");
const Jammed = require("../controllers/jammed.controller");
const Helper = require("../helpers");
const { channel, bot } = require("../config/bot");

exports.pickJam = async (data) => {
  // Confirm that the user is the chosen jammer
  const jammer = await Jammers.getJammer({ slackId: data.user });
  const currentJamEvent = await Jammed.getJamEvent({
    created_at: {
      $gt: new Date().setHours(0, 0, 0, 0)
    }
  });

  // See if a jam has already been added for the day
  if (currentJamEvent.length > 0) {
    bot.postMessageToChannel(
      channel,
      "Whoa!  Hang on a minute.  We already have a jam for today.  Check yo'self.  <https://giphy.com/gifs/cMQRlCqkZ5CYU>"
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
          "Shoot... couldn't find that one.  Try again? <https://giphy.com/gifs/moodman-TJawtKM6OCKkvwCIqX>"
        );
        return;
      }
      // When the jam is added, get it's ID and update the event with the user ID
      Jammed.addJamEvent({ jamId: jam._id, jammerId: jammer._id });

      // Jam out!!!
      bot.postMessageToChannel(
        channel,
        `Nicely done, ${jammer.name}.  "${jam.title}" is one of my favorites!  :tada: :tada:`
      );
    });
  }
};
