import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { defaults } from "../../assets/Defaults";
import API from "../../utils/pitchApi";

class DisplayProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      title: "",
      description: "",
      imageURL: "",
      projectId: "",
      loggedIn: "",
      email: "",
      comment: "",
      interestedUsers: ""
    };
  };

  componentDidMount = () => {
    try {
      this.setState({
        title: this.state.props.location.state[0],
        description: this.state.props.location.state[1],
        imageURL: this.state.props.location.state[2],
        projectId: this.state.props.location.state[3],
        loggedIn: this.state.props.location.state[4]
      }, () => {
        this.getAllInterestedUsers();
      });
    } catch (e) {
      window.location = "/";
    }
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  cancelJoinProject = () => {
    try {
      window.history.back();
    } catch (e) {
      window.location = "/";
    }
  };

  isInputBlank = string => {
    return !string || /^\s*$/.test(string);
  };

  getAllInterestedUsers = () => {
    API.getAllInterestedUsers(this.state.projectId)
      .then(res => {
        this.setState({ interestedUsers: res.data[0].interestedUsers });
      })
      .catch(err => {
        alert(err);
      });
  };

  validateJoinProjectInputs = () => {
    if ((this.state.email === "") ||
      (this.isInputBlank(this.state.email)) ||
      (!this.state.email.includes("@"))) {
      alert("Please enter a valid email.");
    } else {
      this.handleSubmitInterestedUser();
    }
  };

  handleSubmitInterestedUser = () => {
    let interestedUserPayload = {
      email: this.state.email,
      comment: this.state.comment
    };
    API.submitInterestedUser(this.state.projectId, interestedUserPayload)
      .then(() => {
        this.setState({
          email: "",
          comment: ""
        }, () => {
          alert("Thank you for your submission!");
          window.location = "/";
        });
      })
      .catch(err => {
        alert(err)
      });
  };

  render() {
    return (
      <Container fluid>
        {" "}
        <h2>Join Project</h2>
        <Row>
          <Col size="md-4">
            <div id="scrollablePreviewImage">
              {
                this.state.imageURL ?
                  (
                    <img
                      id="previewImage"
                      src={this.state.imageURL}
                      alt="previewImage"
                    />
                  ) : (
                    <img
                      id="previewImage"
                      src={defaults.defaultProjectImage}
                      alt="previewImage"
                    />
                  )
              }
            </div>
          </Col>
          <Col size="md-8">
            <div className="row">
              <div className="col-md-3 text-left"><strong>Title:</strong></div>
              <div className="col-md-9 text-left">{this.state.title}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left"><strong>Description:</strong></div>
              <div className="col-md-9 text-left">{this.state.description}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left"><strong>Submissions:</strong></div>
              <div className="col-md-9 text-left">{this.state.interestedUsers.length}</div>
            </div>
            <br />
            {this.state.loggedIn ? (
              <React.Fragment>
                <Input
                  name="email"
                  placeholder="Email (Required)"
                  onChange={this.handleChange}
                />
                <TextArea
                  name="comment"
                  style={{ height: "125px" }}
                  placeholder="Comment (Optional)"
                  onChange={this.handleChange}
                />
              </React.Fragment>
            ) : null}

            {this.state.loggedIn ? (
              <FormBtn
                style={{ height: "125px" }}
                onClick={this.validateJoinProjectInputs}
                disabled={this.state.disableSubmitButton}
              >
                Submit
              </FormBtn>
            ) : null}
            <FormBtn
              style={{ height: "125px" }}
              onClick={this.cancelJoinProject}
            >
              Cancel
            </FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DisplayProjectDetails;
