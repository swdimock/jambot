const System = require("../models/system.model.js");

exports.getChannel = () => {
    return new Promise(async (resolve, reject) => {
        System.find({
            channel
        }, (err) => {
            if (err) {
                reject(err);
            }
            resolve(err);
        });
    });
}

// Set the channel name
exports.setChannel = ({ channel }) => {
  return new Promise((resolve, reject) => {
    System.create({ channel })
      .then((channel) => {
        resolve(channel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};