const axios = require("axios");

exports.grantSlackAccessToken = (code) => {
  return new Promise((resolve, reject) => {
    axios
      .post('https://slack.com/api/oauth.access', {
        code,
        client_id: 'A027FRCHXM2',
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  });
}