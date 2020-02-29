import React, { Component } from "react";
import axios from "axios";
import API from "../src/utils/pitchApi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
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
      threeHighestVotedProjects: []
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getThreeHighestVotedProjects();
  }

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
  }

  getThreeHighestVotedProjects = () => {
    API.getThreeHighestVotedProjects()
      .then(res => this.setState({ threeHighestVotedProjects: res.data }))
      .catch(err => alert(err));
  };

  handleValidateLoggedOut = event => {
    event.preventDefault();
    let response = window.confirm("Are you sure you want to Logout?");
    if (response) {
      this.handleLogOut();
    }
  }

  handleLogOut = () => {
    axios.get("/user/logout").then(() => {
      this.setState({
        loggedIn: false,
        username: "null"
      });
      window.location=window.location.origin;
      this.getUser();
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
              <Route exact path="/signup" component={SignUp} />
              <Route
                exact
                path="/login"
                component={() => <Login getUser={this.getUser} />}
              />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
