import React, { Component } from "react";
import { Container } from "../../components/Grid";
import HomePageDetails from "../../components/HomePageDetails";
import ThreeHighestVotedProjects from "../../components/ThreeHighestVotedProjects";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      userId: props.userId,
      username: props.username,
      props: props
    };
  }

  render() {
    return (
      <Container fluid>
        <HomePageDetails loggedIn={this.state.loggedIn} />
        <ThreeHighestVotedProjects
          loggedIn={this.state.loggedIn}
          userId={this.state.userId}
          username={this.state.username}
          threeHighestVotedProjects={this.state.props.threeHighestVotedProjects}
        />
      </Container>
    );
  }
}

export default Home;
