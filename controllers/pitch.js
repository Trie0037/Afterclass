const Pitch = require("../models/pitch");
const User = require("../models/user");
const ObjectId = require("mongodb").ObjectId;

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
    Pitch.updateOne({ _id: req.params.projectId }, { $inc: { votes: 1 } })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  downVote: function (req, res) {
    Pitch.updateOne({ _id: req.params.projectId }, { $inc: { votes: -1 } })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  recordVotedProject: function (req, res) {
    User.updateOne(
      { _id: ObjectId(req.params.userId) },
      { $push: { votedProjects: req.params.projectId } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  checkIfUserVotedForThisProject: function (req, res) {
    User.aggregate([
      { $match: { _id: ObjectId(req.params.userId) } },
      {
        $project: {
          votedProjects: {
            $filter: {
              input: "$votedProjects",
              as: "votedProjects",
              cond: { $eq: ["$$votedProjects", req.params.projectId] }
            }
          },
          _id: 0
        }
      }
    ])
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getProjectsBelongingToUser: function (req, res) {
    Pitch.find({
      $text: {
        $search: req.params.userId
      }
    })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  handleDeleteMyProject: function (req, res) {
    Pitch.deleteOne({ _id: req.params.userProjectId })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};
