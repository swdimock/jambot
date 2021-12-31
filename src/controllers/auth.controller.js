const axios = require("axios");
const qs = require('qs');

exports.grantSlackAccessToken = (code) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'https://slack.com/api/oauth.v2.access',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code,
        redirect_uri: 'https://slack-jambot.herokuapp.com/auth'
      }),
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}