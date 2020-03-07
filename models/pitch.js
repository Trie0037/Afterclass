var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pitchSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  username: String,
  votes: Number,
  image: String,
  date: { type: Date, default: Date.now }
});

pitchSchema.index({ userId: "text" });

var Pitch = mongoose.model("Pitch", pitchSchema);

module.exports = Pitch;
