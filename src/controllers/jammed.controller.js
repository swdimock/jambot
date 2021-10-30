const Jammed = require("../models/jammed.model.js");

// Get jams
// exports.getJamEvents = (req, res) => {
//   Jammed.find({}, (err, jammed) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(jammed);
//   });
// };

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
exports.addJamEvent = ({ jamId, jammerId }) => {
  return new Promise((resolve, reject) => {
    Jammed.create({ jamId, jammerId })
      .then((newEvent) => {
        resolve(newEvent);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Delete a jam
// exports.deleteJamEvent = async (req, res) => {
//   await Jammed.deleteOne({ _id: req.params.id }, (err) => {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     res.status(200).json({ message: "Jam event deleted" });
//   });
// };
