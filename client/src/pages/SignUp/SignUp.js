import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import API from "../../utils/pitchApi";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
      shouldRedirectHome: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validatePasswordUponSignup = event => {
    event.preventDefault();
    if (this.state.password.length >= 6) {
      if (this.state.password === this.state.confirmPassword) {
        this.validateEmailUponSignup();
      } else {
        alert("Password does not match.");
      }
    } else {
      alert("Password must be at least 6 characters");
    }
  };

  validateEmailUponSignup = () => {
    if (this.state.email.includes("@") && this.state.email.includes(".")) {
      this.validateUsernameUponSignup();
    } else {
      alert("Must have valid email address");
    }
  };

  validateUsernameUponSignup = () => {
    if (this.state.username.length >= 6) {
      if (!this.state.username.includes(" ")) {
        this.handleSubmit();
      } else {
        alert("Username may not include spaces");
      }
    } else {
      alert("Username must be at least six characters");
    }
  };

  handleSubmit() {
    axios
      .post("/user/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        API.assignRole(response.data._id, this.state.role)
          .then(() => {
            API.assignEmail(response.data._id, this.state.email)
              .then(() => {
                if (response.data) {
                  axios
                    .post("/user/login", {
                      username: this.state.username,
                      password: this.state.password
                    })
                    .then(response => {
                      if (response.data) {
                        this.setState({ shouldRedirectHome: true }, () =>
                          this.props.getUser()
                        );
                      } else {
                        alert("Sign-up error");
                      }
                    })
                    .catch(error => {
                      alert(error);
                    });
                } else {
                  alert("Sign-up error");
                }
              })
              .catch(error => {
                alert(error);
              });
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    if (this.state.shouldRedirectHome) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="SignupForm">
        <div className="form-group">
          <div className="col-1">
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="col-3">
            <input
              className="form-input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1">
            <label className="form-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="col-3">
            <input
              className="form-input"
              type="text"
              id="input-example-1"
              placeholder=""
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
          </div>
          <div className="col-3">
            <input
              className="form-input"
              placeholder=""
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1">
            <label className="form-label" htmlFor="password">
              Confirm_Password:
            </label>
          </div>
          <div className="col-3">
            <input
              className="form-input"
              placeholder=""
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group ">
          <div className="col-7"></div>
          <button
            id="btn-btn-primary"
            style={{ flex: "1 1 0%", border: "black" }}
            onClick={this.validatePasswordUponSignup}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
