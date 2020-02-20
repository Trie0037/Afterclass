const Pitch = require("../models/Pitch");
const User = require("../models/User");
const { ObjectId } = require("mongodb");

module.exports = {
  insert: function (req, res) {
    Pitch.create(req.body)
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getAllProjects: function (req, res) {
    Pitch.find(req.query)
      .sort({ date: -1 })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  upVote: function (req, res) {
    Pitch.updateOne(
      { _id: req.params.projectId },
      { $inc: { votes: 1 } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  downVote: function (req, res) {
    Pitch.updateOne(
      { _id: req.params.projectId },
      { $inc: { votes: -1 } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  recordVotedProject: function (req, res) {
    User
      .updateOne(
        { _id: ObjectId(req.params.userId) },
        { $push: { votedProjects: req.params.projectId } }
      )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};
