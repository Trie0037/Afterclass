const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("./passport");
const PORT = process.env.PORT || 3001;
const app = express();
const user = require("./controllers/user");
const User = require("./models/user");
const router = new express.Router();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// sessions
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use((req, res, next) => {
  next();
});

// Define API routes here
const pitchController = require("./controllers/pitch");
router.post("/api/saved", pitchController.insert);
router.get("/api/getAllProjects", pitchController.getAllProjects);
router.put("/api/upVote/:projectId", pitchController.upVote);
router.put("/api/downVote/:projectId", pitchController.downVote);
router.put("/api/recordVotedProject/:userId/:projectId", pitchController.recordVotedProject);
router.get("/api/checkIfUserVotedForThisProject/:userId/:projectId", pitchController.checkIfUserVotedForThisProject);
router.get("/api/getProjectsBelongingToUser/:userId", pitchController.getProjectsBelongingToUser);
app.use("/user", user);
app.use(router);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const db = process.env.MONGODB_URI || "mongodb://localhost/project-3";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Display mongo queries for debugging
// mongoose.set("debug", true);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

var https = require("https");
setInterval(function() {
    https.get("https://lifeafterclass.herokuapp.com/");
}, 300000); // ping app every 5 minutes (300000)

