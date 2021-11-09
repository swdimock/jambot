const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SystemSchema = new Schema({
  channel: {
    type: String,
  },
});

module.exports = mongoose.model("systemModel", SystemSchema);
