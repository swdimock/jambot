const Events = require("../models/jammed.model");
const { bot } = require("../config/bot");

// Get a random jammer for the day
exports.getRandomJammer = () => {
  return new Promise(async (resolve, reject) => {

    // Get the list of possible jammers from the channel data
    const jammerList = getLocalJammers();

    // Get recent jammers
    const events = await Events.find(
      {},
      null,
      { sort: { created_at: "desc" } },
      (err, result) => result
    );

    // Add total jam counts to the jammers
    const jammers = jammerList.map((jammer) => {
      // Get the total number of events the user has submitted
      let count = 0;
      for (let event of events) {
        const eventJammerId = event.jammerId?.[0]?.toString();
        // const jammerId = jammer._id.toString();
        const jammerId = jammer.id;
        count = eventJammerId === jammerId ? count + 1 : count;
      }
      return { 
        ...jammer,
        count };
    });

    // Remove the 3 most recent jammers
    const mostRecent = events
      .slice(0, 2)
      .map((event) => `${event.jammerId[0]}`);
    const eligibleJammers = jammers.filter((jammer) => {
      return !mostRecent.includes(`${jammer.id}`);
    });

    // Sort by the jammers selected the least to most and get the top 4
    const upcomingJammers = eligibleJammers
      .sort((a, b) => a.count - b.count)
      .slice(0, 2);

    // Randomly select between the remaining jammers
    const randomIndex = Math.floor(Math.random() * upcomingJammers.length);
    resolve(upcomingJammers[randomIndex]);
  });
};

// Sets a Jammer as today's jammer, without an attached video
exports.setDailyJammer = (jammer) => {
  return new Promise(async (resolve, reject) => {
    Events.create({ jammerId: jammer.id })
    .then((dailyJammer) => {
      resolve(dailyJammer);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

/**
 * Gets a jammer for the current day if it's set
 * @returns 
 */
exports.getCurrentJammer = () => {
  return new Promise(async (resolve, reject) => {
    Events.findOne({
      created_at: {
        "$gte": new Date()
      }
    }, (err, jammer) => {
      if (err) {
        reject(err);
      }
      resolve(jammer);
    });
  });
};

/**
 * Get the list of jammers within the current channel
 * @returns 
 */
const getLocalJammers = () => {
  // TODO limit by channel
  return bot.users.filter(user => !user.is_bot && user.name !== 'slackbot');
}

exports.getJammerList = () => {
  return getLocalJammers();
}