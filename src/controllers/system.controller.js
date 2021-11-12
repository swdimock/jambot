const System = require("../models/system.model.js");

exports.getChannel = () => {
    return new Promise(async (resolve, reject) => {
        System.find({
            channel: {
              $exists: true
            }
        }, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

// Set the channel name
exports.setChannel = (channel) => {
  return new Promise((resolve, reject) => {
    System.findOneAndUpdate({ channel })
      .then((channel) => {
        resolve(channel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};