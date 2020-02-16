var Pitch = require("../models/Pitch");

module.exports = {
  insert: function(req, res) {
    Pitch.create(req.body)
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  getAllProjects: function(req, res) {
    Pitch.find(req.query)
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  upVote: function(req, res) {
    Pitch.updateOne({ _id: req.params.pitchId }, { $inc: { upvote: 1 } })
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  downVote: function(req, res) {
    Pitch.updateOne({ _id: req.params.pitchId }, { $inc: { downvote: -1 } })
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
