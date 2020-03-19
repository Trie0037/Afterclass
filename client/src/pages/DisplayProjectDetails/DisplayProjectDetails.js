import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/pitchApi";

class DisplayProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.location.state[0],
      description: props.location.state[1],
      imageURL: props.location.state[2],
      projectId: props.location.state[3],
      loggedIn: props.location.state[4],
      props: props,
      email: "",
      comment: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  cancelJoinProject = () => {
    window.location = "/";
  };

  validateJoinProjectInputs = () => {
    let interestedUserPayload = {
      email: this.state.email,
      comment: this.state.comment
    };
    API.submitInterestedUser(this.state.projectId, interestedUserPayload);
  };

  render() {
    return (
      <Container fluid>
        {" "}
        <h2>Join Project</h2>
        <Row>
          <Col size="md-4">
            <div id="scrollablePreviewImage">
              <img
                id="previewImage"
                src={this.state.imageURL}
                alt="previewImage"
              />
            </div>
          </Col>
          <Col size="md-8">
            <div className="row">
              <div className="col-md-3">Title:</div>
              <div className="col-md-9">{this.state.title}</div>
            </div>
            <div className="row">
              <div className="col-md-3">Description:</div>
              <div className="col-md-9">{this.state.description}</div>
            </div>
            {this.state.loggedIn ? (
              <React.Fragment>
                <Input
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <TextArea
                  name="comment"
                  style={{ height: "125px" }}
                  placeholder="Comment"
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
