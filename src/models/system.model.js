const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SystemSchema = new Schema({
  channel: {
    type: String,
    required: true
  },
  challengeMode: {
    type: Boolean
  }
});

module.exports = mongoose.model("systemModel", SystemSchema);
