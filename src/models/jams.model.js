const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JamsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("jamsModel", JamsSchema);
