const axios = require("axios");

const Jams = require("../models/jams.model.js");

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
