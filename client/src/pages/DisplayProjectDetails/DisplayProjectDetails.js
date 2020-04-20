import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { TextArea, FormBtn } from "../../components/Form";
import InterestedUserSubmissions from "../../components/InterestedUserSubmissions";
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
      userId: "",
      loggedIn: "",
      email: "",
      comment: "",
      username: "",
      interestedUsers: []
    };
  }

  componentDidMount = () => {
    try {
      this.setState(
        {
          title: this.state.props.location.state[0],
          description: this.state.props.location.state[1],
          imageURL: this.state.props.location.state[2],
          projectId: this.state.props.location.state[3],
          loggedIn: this.state.props.location.state[4],
          userId: this.state.props.location.state[5],
          username: this.state.props.location.state[6]
        },
        () => {
          this.getAllInterestedUsers();
          this.getUserEmail();
        }
      );
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

  handleSubmitInterestedUser = () => {
    let interestedUserPayload;
    if (this.state.email) {
      interestedUserPayload = {
        email: this.state.email,
        comment: this.state.comment
      };
    } else {
      interestedUserPayload = {
        email: this.state.username,
        comment: this.state.comment
      };
    }
    API.submitInterestedUser(this.state.projectId, interestedUserPayload)
      .then(() => {
        this.setState(
          {
            email: "",
            comment: ""
          },
          () => {
            alert("Thank you for your submission!");
            window.location = "/";
          }
        );
      })
      .catch(err => {
        alert(err);
      });
  };

  getUserEmail = () => {
    API.getUserEmail(this.state.userId)
      .then(res => {
        this.setState({ email: res.data[0].email });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <Container fluid>
        <h2>Join Project</h2>
        <Row>
          <Col size="md-4">
            <div id="scrollablePreviewImage">
              {this.state.imageURL ? (
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
              )}
            </div>
          </Col>
          <Col size="md-8">
            <div className="row">
              <div className="col-md-3 text-left">
                <strong>Title:</strong>
              </div>
              <div className="col-md-9 text-left">{this.state.title}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">
                <strong>Description:</strong>
              </div>
              <div className="col-md-9 text-left">{this.state.description}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">
                <strong>Submissions:</strong>
              </div>
              <div className="col-md-9 text-left">
                {this.state.interestedUsers.length}
              </div>
            </div>
            <br />
            {this.state.loggedIn ? (
              <React.Fragment>
                <TextArea
                  name="comment"
                  style={{ height: "125px", backgroundColor: "black" }}
                  placeholder="Comments"
                  onChange={this.handleChange}
                />
              </React.Fragment>
            ) : null}
            {this.state.loggedIn ? (
              <FormBtn
                onClick={this.handleSubmitInterestedUser}
                disabled={!this.state.comment}
              >
                Submit
              </FormBtn>
            ) : null}
            <FormBtn onClick={this.cancelJoinProject}>Cancel</FormBtn>
          </Col>
        </Row>
        <InterestedUserSubmissions
          loggedIn={this.state.loggedIn}
          interestedUsers={this.state.interestedUsers}
        />
      </Container>
    );
  }
}

export default DisplayProjectDetails;
