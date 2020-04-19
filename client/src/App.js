import React, { Component } from "react";
import axios from "axios";
import API from "../src/utils/pitchApi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DisplayProjectDetails from "./pages/DisplayProjectDetails";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditProject from "./pages/EditOneProject";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import HeaderLoggedOut from "./components/HeaderLoggedOut";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userId: "",
      username: "",
      threeHighestVotedProjects: [],
      projects: [],
      backgroundImage: ""
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getThreeHighestVotedProjects();
    this.getAllSubmittedProjects();
  }

  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          userId: response.data.user._id,
          loggedIn: true,
          username: response.data.user.username
        }, () => {
          this.getUserBackgroundImage();
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  getThreeHighestVotedProjects = () => {
    API.getThreeHighestVotedProjects()
      .then(res => this.setState({ threeHighestVotedProjects: res.data }))
      .catch(err => alert(err));
  };

  getAllSubmittedProjects = () => {
    API.getAllProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => alert(err));
  };

  getUserBackgroundImage = () => {
    API.getBackgroundImage(this.state.userId)
    .then(res => {
      this.setState({ backgroundImage: res.data[0].backgroundImage }, () => {
        this.renderBackgroundImage();
      })
    })
    .catch(err => alert(err));
  };

  renderBackgroundImage = () => {
    document.body.style.backgroundImage = "url(" + this.state.backgroundImage + ")";
  };

  handleValidateLoggedOut = event => {
    event.preventDefault();
    let response = window.confirm("Are you sure you want to logout?");
    if (response) {
      this.handleLogOut();
    }
  };

  handleLogOut = () => {
    axios.get("/user/logout").then(() => {
      this.setState(
        {
          loggedIn: false,
          username: null
        },
        () => {
          window.location = "/";
        }
      );
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            {this.state.loggedIn ? (
              <HeaderLoggedIn
                handleValidateLoggedOut={this.handleValidateLoggedOut}
              />
            ) : (
              <HeaderLoggedOut />
            )}
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Home
                    loggedIn={this.state.loggedIn}
                    username={this.state.username}
                    userId={this.state.userId}
                    threeHighestVotedProjects={
                      this.state.threeHighestVotedProjects
                    }
                  />
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/displayprojectdetails/:id"
                component={DisplayProjectDetails}
              />
              <Route
                exact
                path="/dashboard"
                component={() => <Dashboard loggedIn={this.state.loggedIn} />}
              />
              <Route exact path="/editproject/:id" component={EditProject} />
              <Route
                exact
                path="/projects"
                component={() => (
                  <Projects
                    userId={this.state.userId}
                    loggedIn={this.state.loggedIn}
                    projects={this.state.projects}
                    username={this.state.username}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                component={() => <Login getUser={this.getUser} />}
              />
              <Route
                exact
                path="/signup"
                component={() => <SignUp getUser={this.getUser} />}
              />
              <Route
                exact
                path="/settings"
                component={() => (
                  <Settings
                    userId={this.state.userId}
                    loggedIn={this.state.loggedIn}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
