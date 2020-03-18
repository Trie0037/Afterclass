import React from "react";
import { Col, Row } from "../../components/Grid";

const About = () => (
  <React.Fragment>
    <Row>
      <Col size="md-12">
        <h2>Our goals for You!</h2>
      </Col>
    </Row>
    <Row>
      <Col size="md-2"></Col>
      <Col size="md-8">
        <p>
          With our University of Minnesota Boot Camp completed and future
          employment on the horizon, we've decided to create an app that
          promotes the opportunity to continue our education, practice coding,
          and collaborate with those wishing to grow their skills.
        </p>
        <p>
          After Class provides an opportunity for users to login or signup, and
          pick the projects or courses that they would like to be involved with.
          The user will also be able to vote on a project that they are
          interested in building with fellow collaborators.
        </p>
        <p>
          The group will schedule ongoing practice lessons to enhance their
          knowledge base in areas such as HTML, CSS, Javascript, AJAX, JQuery,
          MongoDB, Node.js, React.js, etc.
        </p>
        <p>
          Project meet up locations will be held at the Vintage on Selby, or
          otherwise specified by group attendee suggestions.{" "}
        </p>
      </Col>
      <Col size="md-2"></Col>
    </Row>
  </React.Fragment>
);

export default About;
