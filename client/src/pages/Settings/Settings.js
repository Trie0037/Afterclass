import React, { Component } from "react";
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
    API.handleSaveBackgroundImage(this.state.userId, this.state.imageURL)
      .then(() => window.location.reload())
      .catch(err => alert(err));
  };

  validateBackgroundImageInput = e => {
    e.preventDefault();
    if (this.state.imageURL === "" || this.isInputBlank(this.state.imageURL)) {
      alert("Image URL cannot be blank.");
    } else {
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
                  placeholder="image URL"
                  onChange={this.handleChange}
                  value={this.state.imageURL}
                />
              </div>
              <div className="col-md-4">
                <button
                  id="backgroundImageButton"
                  type="button"
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
