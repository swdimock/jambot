const axios = require("axios");

exports.grantSlackAccessToken = (code) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'https://slack.com/api/oauth.v2.access',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        code,
        client_id: 'A027FRCHXM2'
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  });
}