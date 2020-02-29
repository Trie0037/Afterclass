import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/pitchApi";
import Card from "../../components/Card";
import ThreeHighestVotedProjects from "../../components/ThreeHighestVotedProjects";
import "../../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeHighestVotedProjects: []
    };
  };

  componentDidMount() {
    API.getThreeHighestVotedProjects()
      .then(res => {
        this.setState({ threeHighestVotedProjects: res.data });
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
            <h1 className="jumboHeader">
              <strong>
                <i className="fa fa-newspaper-o" /> Login or Signup to meet
                others like you!
                </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Our goals for You!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <p>
              With our Boot Camp winding down and future employment on the
              horizon, we decided to create an app that would provide us with a
              place to continue our education and coding practice with fellow
              classmates and those wishing to grow their skills.
            </p>
            <p>
              After Class provides that opportunity for users to login and pick
              the projects or courses that they would like to be involved with.
              The user will also be able to vote on a project that they are
              interested in building with fellow collaborators.
            </p>
            <p>
              The group will schedule ongoing practice lessons to enhance their
              knowledge base in areas such as HTML, CSS, Javascript, AJAX,
              JQuery, etc.
            </p>
            <p>
              Project meet up locations will be based on group attendee
              suggestions.{" "}
            </p>
          </Col>
          <Col size="md-2"></Col>
        </Row>

        <ThreeHighestVotedProjects
          threeHighestVotedProjects={this.state.threeHighestVotedProjects}
        />

        <Row>
          <Col size="md-12">
            <h2>Join these Courses!</h2>
          </Col>
        </Row>

        <Row>
          <Col size="md-4">
            <Card
              name="HTML"
              description="6PM-9PM"
              image="./assets/images/html5.png"
            />
          </Col>
          <Col size="md-4">
            {" "}
            <Card
              name="Javascript"
              description="11AM-1PM"
              image="./assets/images/javascript.png"
            />
          </Col>

          <Col size="md-4">
            <Card
              name="MYSQL"
              description="3PM-5PM"
              image="./assets/images/mysql.jpeg"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
