import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/pitchApi";
import { defaults } from "../../assets/Defaults";

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      title: "",
      description: "",
      imageURL: "",
      projectId: ""
    };
  }

  componentWillMount = () => {
    try {
      this.setState({
        title: this.state.props.location.state[0],
        description: this.state.props.location.state[1],
        imageURL: this.state.props.location.state[2],
        projectId: this.state.props.location.state[3]
      });
    } catch (e) {
      window.location = "/";
    }
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  isInputBlank = string => {
    return !string || /^\s*$/.test(string);
  };

  validateEditProjectInputs = e => {
    e.preventDefault();
    if (this.state.imageURL === "" || this.isInputBlank(this.state.imageURL)) {
      this.setState({ imageURL: defaults.defaultProjectImage }, () => {
        this.handleEditMyProject();
      });
    } else {
      this.handleEditMyProject();
    }
  };

  handleEditMyProject = () => {
    let editedProjectPayload = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.imageURL
    };
    API.handleEditMyProject(this.state.projectId, editedProjectPayload)
      .then(() => (window.location = "/dashboard"))
      .catch(err => alert(err));
  };

  cancelEditProject = () => {
    window.location = "/dashboard";
  };

  render() {
    return (
      <Container fluid>
        <h2>Edit Project</h2>
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
            <Input
              name="title"
              style={{ backgroundColor: "black", color: "white" }}
              placeholder="Edit your title!"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Input
              name="imageURL"
              style={{ backgroundColor: "black", color: "white" }}
              placeholder="Edit image URL"
              onChange={this.handleChange}
              value={this.state.imageURL}
            />
            <TextArea
              name="description"
              style={{
                height: "125px",
                backgroundColor: "black",
                color: "white"
              }}
              placeholder="Edit your description!"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <FormBtn
              onClick={this.validateEditProjectInputs}
              disabled={this.state.disableSubmitButton}
            >
              Submit
            </FormBtn>
            <FormBtn onClick={this.cancelEditProject}>Cancel</FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditProject;
