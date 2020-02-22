import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Card from "../../components/Card";
import Title from "../../components/Title";
import getUser from "../../utils/api";
import API from "../../utils/pitchApi";
import Project from "../../components/Project";
import "../../App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      username: "",
      title: "",
      description: "",
      projects: [],
      date: {},
      url: "",
      disableUpVoteButton: false,
      disableDownVoteButton: false,
      disableSubmitButton: false
    };
  };

  componentDidMount() {
    getUser().then(response => {
      if (response.data.user) {
        this.setState({
          username: response.data.user.username,
          userId: response.data.user._id
        }, () => {
          this.getAllProjects();
        });
      };
    });
  };

  getAllProjects = () => {
    API.getAllProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => alert(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  isInputBlank = str => {
    return !str || /^\s*$/.test(str);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.isInputBlank(this.state.title) ||
      this.isInputBlank(this.state.description)
    ) {
      alert("Invalid Input!");
    } else {
      if (this.state.title === "" || this.state.description === "") {
        alert("Invalid Input!");
      } else {
        this.setState({ disableSubmitButton: true });
        const payload = {
          title: this.state.title,
          description: this.state.description,
          username: this.state.username,
          votes: 0
        };
        API.saveProject(payload)
          .then(() => {
            //re-enables submit button 
            this.setState({
              disableSubmitButton: false,
              title: "",
              description: ""
            }, () => {
              this.getAllProjects();
            });
          })
          .catch(err => {
            alert(err);
            //re-enable submit button when an error is caught
            this.setState({ disableSubmitButton: false });
          });
      }
    }
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
          alert("You cannot cast another vote on a project you have already voted on.");
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
            this.setState({
              disableDownVoteButton: false, //enables button for downvote
              disableUpVoteButton: false //enables button for upvote
            }, () => {
              this.getAllProjects();
            });
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
            this.setState({
              disableDownVoteButton: false, //enables button for downvote
              disableUpVoteButton: false //enables button for upvote
            }, () => {
              this.getAllProjects();
            });
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-user" /> Welcome{" "}
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "64px",
                      color: "blue"
                    }}
                  >
                    {this.state.username}
                  </h1>
                </strong>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Your Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-2">
            <Card
              name="CSS"
              description="Would like to go deeper."
              image="/assets/images/css3.webp"
            />
          </Col>
          <Col size="md-2">
            <Card
              name="ES6"
              description="Breaking habits."
              image="/assets/images/es6.jpeg" 
            />
          </Col>
          <Col size="md-2">
            <Card
              name="Testing"
              description="Pretty important."
              image="/assets/images/mocha-chaijs.png"
            />
          </Col>
          <Col size="md-2">
            <Card
              name="Java"
              description="Start from scratch."
              image="/assets/images/java.png"
            />
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <h1>Make A Project Suggestion</h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <form action="POST">
              <Input
                name="title"
                placeholder="Title of project!"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <TextArea
                name="description"
                style={{ height: "125px" }}
                placeholder="Describe your project!"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <FormBtn
                style={{ height: "125px" }}
                onClick={this.handleSubmit}
                disabled={this.state.disableSubmitButton}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <hr></hr>
        {this.state.projects.map(project => {
          return (
            <Title key={project._id}>
              <Project
                id={project._id}
                username={project.username}
                title={project.title}
                description={project.description}
                votes={project.votes}
                hasUserVotedOnThisProject={this.hasUserVotedOnThisProject}
                disableUpVoteButton={this.state.disableUpVoteButton}
                disableDownVoteButton={this.state.disableDownVoteButton}
              />
            </Title>
          );
        })}
      </Container>
    );
  }
}

export default Dashboard;
