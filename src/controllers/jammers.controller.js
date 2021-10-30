const Jammers = require("../models/jammers.model");
const Events = require("../models/jammed.model");

// Get a random jammer for the day
exports.getRandomJammer = () => {
  return new Promise(async (resolve, reject) => {
    // Get the list of jammers
    const jammerList = await Jammers.find({}, (err, jammers) => jammers);

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
        const jammerId = jammer._id.toString();
        count = eventJammerId === jammerId ? count + 1 : count;
      }
      return { ...jammer._doc, count };
    });

    // Remove the 3 most recent jammers
    const mostRecent = events
      .slice(0, 2)
      .map((event) => `${event.jammerId[0]}`);
    const eligibleJammers = jammers.filter((jammer) => {
      return !mostRecent.includes(`${jammer._id}`);
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

exports.getCurrentJammer = () => {
  return new Promise(async (resolve, reject) => {});
};

// Get jammers
exports.getJammers = () => {
  return new Promise((resolve, reject) => {
    Jammers.find({}, (err, jammers) => {
      if (err) {
        reject(err);
      }
      resolve(jammers);
    });
  });
};

// Get a jammer
exports.getJammer = (args) => {
  return new Promise((resolve, reject) => {
    Jammers.findOne(args, (err, jammer) => {
      if (err) {
        reject(err);
      }
      resolve(jammer);
    });
  });
};

// Add a jammer
exports.addJammer = ({ name, display_name, email }) => {
  return new Promise((resolve, reject) => {
    Jammers.create({ name, display_name, email })
      .then((newJammer) => {
        resolve(newJammer);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Update a jammer
exports.updateJammer = (req, res) => {
  return new Promise((resolve, reject) => {
    // Jammers.findOneAndUpdate()
  });
};

// Delete a jammer
exports.deleteJammer = async (name) => {
  return new Promise((resolve, reject) => {
    Jammers.deleteOne({ name: name })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
