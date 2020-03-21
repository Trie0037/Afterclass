import React, { Component } from "react";
import { Container } from "../../components/Grid";
import HomePageDetails from "../../components/HomePageDetails";
import ThreeHighestVotedProjects from "../../components/ThreeHighestVotedProjects";
import CoursesToJoin from "../../components/CoursesToJoin";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      userId: props.userId,
      props: props
    };
  }

  render() {
    return (
      <Container fluid>
        <HomePageDetails />
        <ThreeHighestVotedProjects
          loggedIn={this.state.loggedIn}
          userId={this.state.userId}
          threeHighestVotedProjects={this.state.props.threeHighestVotedProjects}
        />
        <CoursesToJoin />
      </Container>
    );
  }
}

export default Home;
