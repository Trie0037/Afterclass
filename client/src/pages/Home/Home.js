import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/pitchApi";
import HomePageDetails from "../../components/HomePageDetails";
import ThreeHighestVotedProjects from "../../components/ThreeHighestVotedProjects";
import CoursesToJoin from "../../components/CoursesToJoin";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeHighestVotedProjects: []
    };
  };

  componentDidMount() {
    this.getThreeHighestVotedProjects();
  };

  getThreeHighestVotedProjects = () => {
    API.getThreeHighestVotedProjects()
      .then(res => this.setState({ threeHighestVotedProjects: res.data }))
      .catch(err => alert(err));
  };

  render() {
    return (
      <Container fluid>
        <HomePageDetails />
        <ThreeHighestVotedProjects
          threeHighestVotedProjects={this.state.threeHighestVotedProjects}
        />
        <CoursesToJoin />
      </Container>
    );
  }
}

export default Home;
