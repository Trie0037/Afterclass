import React from "react";
import { Col, Row } from "../../components/Grid";

const HomePageDetails = () => (
  <React.Fragment>
    <Row>
      <Col size="md-12">
        <h1 className="jumboHeader">
          <strong>
            <i className="fa fa-newspaper-o" /> Login or Signup to meet others
            like you!
          </strong>
        </h1>
      </Col>
    </Row>
  </React.Fragment>
);

export default HomePageDetails;
