const axios = require("axios");

const Jams = require("../models/jams.model.js");

// Get jams
// exports.getJams = (req, res) => {
//   Jams.find({}, (err, jammers) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(jammers);
//   });
// };

// Get a jam
// exports.getJam = (req, res) => {
//   Jams.findById({ _id: req.params.id }, (err, jammers) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(jammers);
//   });
// };

// Add a jam
exports.addJam = (videoIdParam) => {
  return new Promise(async (resolve, reject) => {
    const metaData = await getYoutubeVideoMeta(videoIdParam);
    const items = metaData.items[0];
    if (items) {
      const title = items.snippet?.title;
      const link = `https://www.youtube.com/watch?v=${videoIdParam}`;
      const artist = title.split('-')[0]?.trim();
      await Jams.create({ title, artist, link })
        .then((newJam) => {
          resolve(newJam);
        })
        .catch((error) => {
          reject(error);
        });
    }
    resolve(false);
  });
};

// Updates a jam
// exports.updateJam = (req, res) => {
//   Jams.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true },
//     (err, jam) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(jam);
//     }
//   );
// };

// Delete a jam
// exports.deleteJam = async (req, res) => {
//   await Jams.deleteOne({ _id: req.params.id }, (err) => {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     res.status(200).json({ message: "Jam deleted" });
//   });
// };

const getYoutubeVideoMeta = (videoUid) => {
  const apiUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
  apiUrl.searchParams.append("id", videoUid);
  apiUrl.searchParams.append("key", "AIzaSyCVDCuoRpnyXXuw5D_bc9bYK1VG98ZkSvo");
  apiUrl.searchParams.append("part", "snippet");
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl.href)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
