const Jammers = require("./controllers/jammers.controller.js");
const Jams = require("./controllers/jams.controller.js");
const Events = require("./controllers/jammed.controller.js");
const express = require("express");
const bodyParser = require("body-parser");

require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("¯\\_(ツ)_/¯");
});

// // Jammer endpoints
// app.route("/jammers/random").get(Jammers.getRandomJammer);
// app.route("/jammers").get(Jammers.getJammers).post(Jammers.addJammer);
// app
//   .route("/jammers/:id")
//   .get(Jammers.getJammer)
//   .put(Jammers.updateJammer)
//   .delete(Jammers.deleteJammer);

// // Jam endpoints
// app.route("/jams").get(Jams.getJams).post(Jams.addJam);
// app
//   .route("/jams/:id")
//   .get(Jams.getJam)
//   .put(Jams.updateJam)
//   .delete(Jams.deleteJam);

// // Jam cvent endpoints
// app.route("/events").get(Events.getJamEvents).post(Events.addJamEvent);
// app.route("/events/:id").delete(Events.deleteJamEvent);

app.listen(port, () => {
  console.log(`Speak to me on port ${port}.  I'm lonely.`);
});
