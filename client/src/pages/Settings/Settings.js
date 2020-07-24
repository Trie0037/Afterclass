import React, { Component } from "react";
import API from "../../utils/pitchApi";
import { Container } from "../../components/Grid";

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

  validateBackgroundImageInput = () => {
    if (this.state.imageURL === "" || this.isInputBlank(this.state.imageURL)) {
      alert("Image URL cannot be blank.");
    } else {
      this.handleSaveBackgroundImage();
    }
  };

  validateResetBackgroundImage = () => {
    let response = window.confirm(
      "Reset your background image back to default?"
    );
    if (response) {
      this.handleResetBackgroundImage();
    }
  };

  handleResetBackgroundImage = () => {
    API.handleResetBackgroundImage(this.state.userId)
      .then(() => window.location.reload())
      .catch(err => alert(err));
  };

  render() {
    return (
      <div>
        {
          this.state.loggedIn ?
            (
              <Container fluid>
                <br />
                <div className="row">
                  <div className="col-md-4">Background Image:</div>
                  <div className="col-md-4">
                    <input
                      id="backgroundImageInput"
                      type="text"
                      name="imageURL"
                      placeholder="Image URL"
                      onChange={this.handleChange}
                      value={this.state.imageURL}
                    />
                  </div>
                  <div className="col-md-2">
                    <button
                      id="backgroundImageButton"
                      type="button"
                      onClick={this.validateBackgroundImageInput}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      id="backgroundImageResetButton"
                      type="button"
                      onClick={this.validateResetBackgroundImage}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="backgroundPreviewImageContainer col-md-12">
                    {
                      this.state.imageURL ?
                        (
                          <img
                            id="backgroundPreviewImage"
                            src={this.state.imageURL}
                            alt="Background preview"
                          />
                        ) :
                        (
                          null
                        )
                    }
                  </div>
                </div>
              </Container>
            ) :
            (
              <div>You are not authorized to view this page.</div>
            )
        }
      </div>
    );
  }
}

export default Settings;
