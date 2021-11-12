const Jammed = require("../models/jammed.model.js");
// Get single jam
exports.getJamEvent = (args) => {
  return new Promise((resolve, reject) => {
    Jammed.find(args)
      .then((event) => {
        resolve(event);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Add a jam
exports.addJamEvent = (eventId, { jamId, jammerId }) => {
  return new Promise((resolve, reject) => {
    Jammed.updateOne({_id: eventId}, { 
      $set: { jamId, jammerId } 
    })
      .then((newEvent) => {
        resolve(newEvent);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
