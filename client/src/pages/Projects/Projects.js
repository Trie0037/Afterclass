import React, { Component } from "react";
import { Container } from "../../components/Grid";
import AllProjects from "../../components/AllProjects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      loggedIn: props.loggedIn,
      projects: props.projects,
      username: props.username,
      props: props
    };
  }

  render() {
    return (
      <Container fluid>
        <AllProjects
          userId={this.state.userId}
          loggedIn={this.state.loggedIn}
          projects={this.state.projects}
          username={this.state.username}
        />
      </Container>
    );
  }
}

export default Projects;
