import React from "react";
import { Col, Row } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const About = () => (
  <React.Fragment>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </React.Fragment>
);

export default About;
