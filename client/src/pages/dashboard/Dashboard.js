import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card";
import Title from "../../components/Title";
import getUser from "../../utils/api";
import API from "../../utils/pitchApi";
import PitchContainer from "../../components/PitchContainer";
import Project from "../../components/Project";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      description: "",
      projects: [],
      date: {},
      url: "",
      titlesAndDescriptions: []
    };
  }

  componentDidMount() {
    getUser().then(response => {
      if (response.data.user) {
        this.setState({ username: response.data.user.username }, () => {
          this.getAllProjects();
        });
      }
    });
  }

  getAllProjects = () => {
    API.getAllProjects()
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
      // description: event.target.value
    });
  };

  handleChange2 = event => {
    this.setState({
      // title: event.target.value,
      description: event.target.value
    });
  };

  handleSubmit = event => {
    // alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
    this.setState({
      title: event.target.value,
      description: event.target.value,
      titlesAndDescriptions: [...this.state.titlesAndDescriptions].concat({
        title: this.state.title,
        description: this.state.description
      })
    });
    const userInput = {
      title: this.state.title,
      description: this.state.description,
      username: this.state.username,
      upvote: 0,
      downvote: 0
    };
    API.savePitch(userInput)
      .then(() => {
        this.getAllProjects();
      })
      .catch(err => {
        alert(err);
      });
  };

  pitchContainer = props => {
    let titleLength = Object.keys(this.state.title).value;
    let descriptionLength = Object.keys(this.state.description).value;
  };

  // Toggle Completed idea
  //  handleVotes = (e, projectId) => {
  //   e.preventDefault();
  //   API.handleVotes(projectId)
  //     votes: this.state.votes.map(votes => {
  //       if (vote.id === upvote) {
  //         vote.completed = !vote.completed;
  //       }else (vote.id === downvote) {
  //         vote.completed = !vote.completed;
  //       }return vote;
  //    })
  //   };
  // };

  handleUpVote = (event, projectId) => {
    event.preventDefault();
    API.handleUpVote(projectId)
      .then(() => {
        this.getAllProjects();
      })
      .catch(err => {
        alert(err);
      });
  };

  handleDownVote = (event, projectId) => {
    event.preventDefault();
    API.handleDownVote(projectId)
      .then(() => {
        this.getAllProjects();
      })
      .catch(err => {
        alert(err);
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
              image="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
            />
          </Col>
          <Col size="md-2">
            <Card
              name="ES6"
              description="Breaking habits."
              image="https://cdn-images-1.medium.com/max/1200/1*SL4sWHdjGR3vo0x5ta3xfw.jpeg"
            />
          </Col>
          <Col size="md-2">
            <Card
              name="Testing"
              description="Pretty important."
              image="https://mherman.org/assets/img/blog/mocha-chaijs.png"
            />
          </Col>

          <Col size="md-2">
            <Card
              name="Java"
              description="Start from scratch."
              image="https://cdn-images-1.medium.com/max/960/1*ZGEUEy_SifxtHG-CSAWsZA.png"
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
                // className="new-pitch"
                placeholder="Title of project!"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <TextArea
                // className="new-pitch"
                style={{ height: "125px" }}
                placeholder="Describe your project!"
                onChange={this.handleChange2}
                value={this.state.description}
              />
              <FormBtn style={{ height: "125px" }} onClick={this.handleSubmit}>
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
                upvote={project.upvote}
                downvote={project.downvote}
                handleUpVote={this.handleUpVote}
                handleDownVote={this.handleDownVote}
              />
            </Title>
          );
        })}
      </Container>
    );
  }
}

export default Dashboard;
