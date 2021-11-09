const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JammedSchema = new Schema({
  jammerId: [
    {
      type: String,
      ref: "jammersModel"
    }
  ],
  jamId: [
    {
      type: Schema.Types.ObjectId,
      ref: "jamsModel"
    }
  ],
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("jammedModel", JammedSchema);
