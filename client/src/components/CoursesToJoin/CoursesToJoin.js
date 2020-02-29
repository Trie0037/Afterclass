import React from "react";
import { Col, Row } from "../../components/Grid";
import Card from "../../components/Card";

const CoursesToJoin = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default CoursesToJoin;
