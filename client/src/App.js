import React, { Component } from "react";
import axios from "axios";
import API from "../src/utils/pitchApi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditProject from "./pages/EditOneProject";
import SignUp from "./pages/SignUp";
import HeaderLoggedOut from "./components/HeaderLoggedOut";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      threeHighestVotedProjects: [],
      projects: []
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  componentDidMount() {
    this.getUser();
    this.getThreeHighestVotedProjects();
    this.getAllSubmittedProjects();
  };

  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  };

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
                    username={this.state.username}
                    threeHighestVotedProjects={
                      this.state.threeHighestVotedProjects
                    }
                  />
                )}
              />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/dashboard"
                component={() => <Dashboard loggedIn={this.state.loggedIn} />}
              />
              <Route exact path="/editproject/:id" component={EditProject} />
              <Route
                exact
                path="/projects"
                component={() => <Projects projects={this.state.projects} />}
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
