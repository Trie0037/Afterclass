var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  username: String,
  votes: Number,
  image: String,
  interestedUsers: [{
    email: { type: String },
    comment: { type: String },
    date: { type: Date, default: Date.now }
  }],
  date: { type: Date, default: Date.now }
});

projectSchema.index({ userId: "text" });

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
