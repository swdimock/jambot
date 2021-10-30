const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JammersSchema = new Schema({
  slackId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  display_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("jammersModel", JammersSchema);
