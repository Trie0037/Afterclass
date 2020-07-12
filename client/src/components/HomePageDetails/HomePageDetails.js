import React from "react";
import { Col, Row } from "../../components/Grid";

const HomePageDetails = props => (
  <React.Fragment>
    {
      props.loggedIn ?
        (
          null
        ) :
        (
          <Row>
            <Col size="md-12">
              <h1 className="jumboHeader">
                <strong>
                  <i className="fa fa-newspaper-o" /> Login or Signup to meet others like you!
                </strong>
              </h1>
            </Col>
          </Row>
        )
    }
  </React.Fragment>
);

export default HomePageDetails;
