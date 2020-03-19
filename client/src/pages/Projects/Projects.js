import React, { Component } from "react";
import { Container } from "../../components/Grid";
import AllProjects from "../../components/AllProjects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      props: props
    };
  };

  render() {
    return (
      <Container fluid>
        <AllProjects
          loggedIn={this.state.props.loggedIn}
          projects={this.state.props.projects}
        />
      </Container>
    );
  }
}

export default Projects;
