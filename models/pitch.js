var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pitchSchema = new Schema({
  title: String,
  description: String,
  username: String,
  votes: Number,
  date: { type: Date, default: Date.now }
});

var Pitch = mongoose.model("Pitch", pitchSchema);

module.exports = Pitch;
