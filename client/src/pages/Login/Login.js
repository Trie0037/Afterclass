import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      username: "",
      password: "",
      confirmPassword: "",
      shouldRedirectDashboard: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.data) {
          this.setState({ shouldRedirectDashboard: true });
          this.props.getUser();
        } else {
          alert("Login error");
        }
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    if (this.state.shouldRedirectDashboard) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="LoginForm">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-3 col-mr-auto">
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
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
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
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              id="btn-btn-primary"
              style={{ flex: "1 1 0%", border: "black" }}
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
