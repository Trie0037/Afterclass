import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/pitchApi";
import defaults from "../../assets/Defaults";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      loggedIn: false,
      userId: "",
      imageURL: ""
    };
  }

  componentDidMount() {
    this.setState({
      loggedIn: this.state.props.loggedIn,
      userId: this.state.props.userId
    });
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  isInputBlank = string => {
    return !string || /^\s*$/.test(string);
  };

  handleSaveBackgroundImage = () => {
    let backgroundImage = {
      image: this.state.imageURL
    };
    API.handleSaveBackgroundImage(this.state.userId, backgroundImage)
      .then(res => (console.log(res)))
      .catch(err => alert(err));
  };

  validateBackgroundImageInput = e => {
    e.preventDefault();
    if (this.state.imageURL === "" || this.isInputBlank(this.state.imageURL)) {
      this.handleSaveBackgroundImage();
    }
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <input
                  id="backgroundImageInput"
                  type="text"
                  name="imageURL"
                  onChange={this.handleChange}
                  value={this.state.imageURL}
                />
              </div>
              <div className="col-md-4">
                <button
                  id="backgroundImageButton"
                  onClick={this.validateBackgroundImageInput}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">Preview</div>
              <div className="backgroundPreviewImageContainer col-md-10">
                <img id="backgroundPreviewImage" src={this.state.imageURL} />
              </div>
            </div>
          </div>
        ) : (
          <div>You are not authorized to view this page.</div>
        )}
      </div>
    );
  }
}

export default Settings;
