import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Title from "../../components/Title";
import getUser from "../../utils/api";
import API from "../../utils/pitchApi";
import Project from "../../components/Project";
import UserProject from "../../components/UserProject";
import { defaults } from "../../assets/Defaults";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      userId: "",
      username: "",
      title: "",
      description: "",
      projects: [],
      userProjects: [],
      date: {},
      url: "",
      userRole: "user",
      defaultImage: defaults.defaultProjectImage,
      imageToSubmit: defaults.defaultProjectImage,
      imageURL: "",
      disableUpVoteButton: false,
      disableDownVoteButton: false,
      disableSubmitButton: false
    };
  }

  componentDidMount() {
    getUser().then(response => {
      if (response.data.user) {
        this.setState(
          {
            username: response.data.user.username,
            userId: response.data.user._id
          },
          () => {
            this.getAllProjects();
            this.getProjectsBelongingToUser();
          }
        );
      }
    });
  }

  getAllProjects = () => {
    API.getAllProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => alert(err));
  };

  getProjectsBelongingToUser = () => {
    API.getProjectsBelongingToUser(this.state.userId)
      .then(res => this.setState({ userProjects: res.data }))
      .catch(err => alert(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  isInputBlank = string => {
    return !string || /^\s*$/.test(string);
  };

  validateProjectInputs = event => {
    event.preventDefault();
    this.setState({ imageToSubmit: this.state.imageURL });
    if (this.state.imageURL === "" || this.isInputBlank(this.state.imageURL)) {
      this.setState({ imageToSubmit: this.state.defaultImage });
    }
    API.checkUserPermission(this.state.userId, this.state.userRole)
      .then(res => {
        try {
          if (res.data[0].roles[0] === this.state.userRole) {
            const invalidInputMessage = "Input values cannot be blank.";
            if (
              this.isInputBlank(this.state.title) ||
              this.isInputBlank(this.state.description)
            ) {
              alert(invalidInputMessage);
            } else {
              if (this.state.title === "" || this.state.description === "") {
                alert(invalidInputMessage);
              } else {
                let response = window.confirm(
                  "Are you sure you want to submit this project?"
                );
                if (response) {
                  this.handleSubmitProject();
                } else {
                  this.setState({ imageToSubmit: this.state.defaultImage });
                }
              }
            }
          }
        } catch (err) {
          alert("You are not authorized to perform this action.");
          window.location = "/";
        }
      })
      .catch(() => {
        alert("You are not authorized to perform this action.");
        window.location = "/";
      });
  };

  handleSubmitProject = () => {
    this.setState({ disableSubmitButton: true });
    const payload = {
      userId: this.state.userId,
      title: this.state.title,
      description: this.state.description,
      username: this.state.username,
      votes: 0,
      image: this.state.imageToSubmit
    };
    API.submitProject(payload)
      .then(() => {
        //re-enables submit button
        this.setState(
          {
            disableSubmitButton: false,
            title: "",
            description: "",
            imageURL: "",
            imageToSubmit: this.state.defaultImage
          },
          () => {
            this.getAllProjects();
            this.getProjectsBelongingToUser();
          }
        );
      })
      .catch(err => {
        alert(err);
        //re-enable submit button when an error is caught
        this.setState({ disableSubmitButton: false });
      });
  };

  hasUserVotedOnThisProject = (event, projectId, voteType) => {
    event.preventDefault();
    this.setState({
      disableDownVoteButton: true, //disables downvote button until db check completed
      disableUpVoteButton: true //disables upvote button until db check completed
    });
    API.checkIfUserVotedForThisProject(this.state.userId, projectId)
      .then(res => {
        const votedProjectIdFromDatabase = res.data[0].votedProjects;
        if (projectId.toString() === votedProjectIdFromDatabase.toString()) {
          alert(
            "You cannot cast another vote on a project you have already voted on."
          );
          this.setState({
            disableUpVoteButton: false, //enables button for upvote
            disableDownVoteButton: false //enables button for downvote
          });
        } else {
          switch (voteType) {
            case "upVote":
              this.handleUpVote(projectId);
              break;
            case "downVote":
              this.handleDownVote(projectId);
              break;
            default:
              alert("Vote Type Error.");
          }
        }
      })
      .catch(err => {
        alert(err);
        this.setState({
          disableDownVoteButton: false, //enables button for downvote
          disableUpVoteButton: false //enables button for upvote
        });
      });
  };

  handleUpVote = projectId => {
    API.handleUpVote(projectId)
      .then(() => {
        API.recordVotedProject(this.state.userId, projectId)
          .then(() => {
            this.setState(
              {
                disableDownVoteButton: false, //enables button for downvote
                disableUpVoteButton: false //enables button for upvote
              },
              () => {
                this.getAllProjects();
                this.getProjectsBelongingToUser();
              }
            );
          })
          .catch(err => {
            alert(err);
            this.setState({
              disableDownVoteButton: false, //enables button for downvote
              disableUpVoteButton: false //enables button for upvote
            });
          });
      })
      .catch(err => {
        alert(err);
        this.setState({
          disableDownVoteButton: false, //enables button for downvote
          disableUpVoteButton: false //enables button for upvote
        });
      });
  };

  handleDownVote = projectId => {
    API.handleDownVote(projectId)
      .then(() => {
        API.recordVotedProject(this.state.userId, projectId)
          .then(() => {
            this.setState(
              {
                disableDownVoteButton: false, //enables button for downvote
                disableUpVoteButton: false //enables button for upvote
              },
              () => {
                this.getAllProjects();
                this.getProjectsBelongingToUser();
              }
            );
          })
          .catch(err => {
            alert(err);
            this.setState({
              disableDownVoteButton: false, //enables button for downvote
              disableUpVoteButton: false //enables button for upvote
            });
          });
      })
      .catch(err => {
        alert(err);
        this.setState({
          disableDownVoteButton: false, //enables button for downvote
          disableUpVoteButton: false //enables button for upvote
        });
      });
  };

  // Need to do a map over current user projects and filter out project to be deleted
  handleDeleteMyProject = userProjectId => {
    API.handleDeleteMyProject(userProjectId).then(() => {
      this.getAllProjects();
      this.getProjectsBelongingToUser();
    });
  };

  handleValidateDeleteMyProject = (event, userProjectId) => {
    event.preventDefault();
    let response = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (response) {
      this.handleDeleteMyProject(userProjectId);
    }
  };

  render() {
    return (
      <Container fluid>
        {this.state.props.loggedIn ? (
          <React.Fragment>
            <Row>
              <Col size="md-12">
                <div>
                  <h1 className="welcomeUser">
                    <strong>
                      <i className="fa fa-user" /> Welcome{" "}
                      <h1
                        style={{
                          fontWeight: "bolder",
                          fontSize: "44px",
                          color: "#00ccff"
                        }}
                      >
                        {this.state.username}
                      </h1>
                    </strong>
                  </h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <div>
                  <h1>Your Projects</h1>
                </div>
              </Col>
            </Row>
            <React.Fragment>
              {this.state.userProjects < 1 ? (
                <React.Fragment>
                  <div className="noProjectNotification">
                    You have no project suggestions. Create one below!
                  </div>
                  <hr />
                </React.Fragment>
              ) : (
                this.state.userProjects.map(userProject => {
                  return (
                    <Title key={userProject._id}>
                      <UserProject
                        _id={userProject._id}
                        title={userProject.title}
                        description={userProject.description}
                        image={userProject.image}
                        votes={userProject.votes}
                        date={userProject.date}
                        handleValidateDeleteMyProject={
                          this.handleValidateDeleteMyProject
                        }
                        handleValidateEditMyProject={
                          this.handleValidateEditMyProject
                        }
                      />
                    </Title>
                  );
                })
              )}
            </React.Fragment>
            <div className="makeProjectSuggestion">
              <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                  <h1>Make A Project Suggestion</h1>
                </Col>
                <Col size="md-2"></Col>
              </Row>
            </div>
            <Row>
              <Col size="md-4">
                <div id="scrollablePreviewImage">
                  <img
                    id="previewImage"
                    src={this.state.imageToSubmit}
                    alt="previewImage"
                  />
                </div>
              </Col>
              <Col size="md-8">
                <Input
                  name="title"
                  style={{ backgroundColor: "black" }}
                  placeholder="Title of project!"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <Input
                  name="imageURL"
                  style={{ backgroundColor: "black" }}
                  placeholder="Paste image URL"
                  onChange={this.handleChange}
                  value={this.state.imageURL}
                />
                <TextArea
                  name="description"
                  style={{ height: "125px", backgroundColor: "black" }}
                  placeholder="Describe your project!"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <FormBtn
                  id="dashboardbutton"
                  onClick={this.validateProjectInputs}
                  disabled={this.state.disableSubmitButton}
                >
                  Submit
                </FormBtn>
              </Col>
            </Row>
            <React.Fragment>
              {this.state.projects.map(project => {
                return (
                  <Title key={project._id}>
                    <Project
                      id={project._id}
                      username={project.username}
                      title={project.title}
                      description={project.description}
                      votes={project.votes}
                      date={project.date}
                      hasUserVotedOnThisProject={this.hasUserVotedOnThisProject}
                      disableUpVoteButton={this.state.disableUpVoteButton}
                      disableDownVoteButton={this.state.disableDownVoteButton}
                    />
                  </Title>
                );
              })}
            </React.Fragment>
          </React.Fragment>
        ) : (
          <div>You are not authorized to view this page.</div>
        )}
      </Container>
    );
  }
}

export default Dashboard;
