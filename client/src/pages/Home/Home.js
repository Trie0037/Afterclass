import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "../../App.css";
import getUser from "../../utils/api";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      id: ""
    };
  }

  componentDidMount() {
    getUser().then(response => {
      if (response.data.user) {
        this.setState({
          username: response.data.user.username,
          id: response.data.user._id
        });
      }
    });
  }

  handleJoinButton = name => {
    console.log(`name = ${name}, userid= ${this.state.id}`);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="jumboHeader">
                <strong>
                  <i className="fa fa-newspaper-o" /> Login or Signup to meet
                  others like you!
                </strong>
              </h1>
            </Jumbotron>
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

        <Row>
          <Col size="md-12">
            <h1>Join these Projects!</h1>
          </Col>
        </Row>

        <Row>
          <Col size="md-4">
            <Card
              name="Afterclass"
              description="Enhanced version of Project3"
              image="./assets/images/tutorial.jpg"
              handleJoinButton={this.handleJoinButton}
            />
          </Col>
          <Col size="md-4">
            <Card
              name="Reactjs"
              description="VintageGroup favorate"
              image="./assets/images/react.png"
            />
          </Col>
          <Col size="md-4">
            <Card
              name="Bootstrap"
              description="Frontend Style"
              image="\assets\images\bootstrap-social.png"
            />
          </Col>
        </Row>

        <Row>
          <Col size="md-4">
            <Link
              style={linkStyle}
              to={{ pathname: "https://after-class.herokuapp.com/" }}
              target="_blank"
            >
              Projects
            </Link>{" "}
          </Col>
          <Col size="md-4">
            <Link
              style={linkStyle}
              to={{ pathname: "https://reactjs.org/" }}
              target="_blank"
            >
              Reactjs
            </Link>{" "}
          </Col>
          <Col size="md-4">
            <Link
              style={linkStyle}
              to={{ pathname: "https://getbootstrap.com/" }}
              target="_blank"
            >
              Bootstrap
            </Link>{" "}
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1>Join these Courses!</h1>
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

const linkStyle = {
  marginTop: "5px",
  paddingTop: "0px",
  color: "#00628c",
  textDecoration: ""
};

export default Home;
