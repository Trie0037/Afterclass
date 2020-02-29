import React from "react";
import { Col, Row } from "../../components/Grid";

const HomePageDetails = () => (
  <React.Fragment>
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
        <h2>Our goals for You!</h2>
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
  </React.Fragment>
);

export default HomePageDetails;
