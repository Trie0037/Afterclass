const Project = require("../models/project");
const User = require("../models/user");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  submitProject: function (req, res) {
    Project.create(req.body)
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getAllProjects: function (req, res) {
    Project.find(req.query)
      .sort({ date: -1 })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  upVote: function (req, res) {
    Project.updateOne({ _id: req.params.projectId }, { $inc: { votes: 1 } })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  downVote: function (req, res) {
    Project.updateOne({ _id: req.params.projectId }, { $inc: { votes: -1 } })
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
              cond: { $eq: ["$$votedProjects", req.params.projectId] },
            },
          },
          _id: 0,
        },
      },
    ])
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getProjectsBelongingToUser: function (req, res) {
    Project.find({
      $text: {
        $search: req.params.userId,
      },
    })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  handleDeleteMyProject: function (req, res) {
    Project.deleteOne({ _id: req.params.userProjectId })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  handleEditMyProject: function (req, res) {
    Project.updateOne(
      { _id: req.params.projectId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
        },
      }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  handleSaveBackgroundImage: function (req, res) {
    let backgroundImage = "";
    for (let url in req.body) {
      backgroundImage = url;
      break;
    }
    User.updateOne(
      { _id: req.params.userId },
      { $set: { backgroundImage: backgroundImage } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  handleResetBackgroundImage: function (req, res) {
    User.updateOne(
      { _id: req.params.userId },
      { $set: { backgroundImage: "" } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getAllInterestedUsers: function (req, res) {
    Project.find({ _id: req.params.projectId })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getThreeHighestVotedProjects: function (req, res) {
    Project.find(req.query)
      .sort({ votes: -1 })
      .limit(3)
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  checkUserPermission: function (req, res) {
    User.aggregate([
      { $match: { _id: ObjectId(req.params.userId) } },
      {
        $project: {
          roles: {
            $filter: {
              input: "$roles",
              as: "role",
              cond: { $eq: ["$$role", req.params.roleToCheck] },
            },
          },
          _id: 0,
        },
      },
    ])
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  submitInterestedUser: function (req, res) {
    Project.updateOne(
      { _id: req.params.projectId },
      { $push: { interestedUsers: req.body } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  assignRole: function (req, res) {
    User.updateOne(
      { _id: req.params.userId },
      { $push: { roles: req.params.role } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  assignEmail: function (req, res) {
    User.updateOne(
      { _id: req.params.userId },
      { $set: { email: req.params.email } }
    )
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getUserEmail: function (req, res) {
    User.find({ _id: req.params.userId }, { email: 1 })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  getBackgroundImage: function (req, res) {
    User.find({ _id: req.params.userId }, { backgroundImage: 1 })
      .then(function (doc) {
        res.json(doc);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};
