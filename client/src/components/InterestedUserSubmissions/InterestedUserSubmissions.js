import React from "react";
import { Col, Row } from "../../components/Grid";

const InterestedUserSubmissions = props => {
  return (
    <React.Fragment>
      {
        props.interestedUsers.map(interestedUser => {
          return (
            <React.Fragment key={interestedUser._id}>
              <hr />
              <Row>
                <Col size="4">
                  <div className="text-left">
                    {
                      props.loggedIn ?
                        (
                          <span>{interestedUser.email}</span>
                        ) : (
                          <span>{interestedUser.email.substring(0, 3)}...</span>
                        )
                    }
                  </div>
                </Col>
                <Col size="8">
                  <div className="text-left">
                    {
                      interestedUser.comment ?
                        (
                          <span>{interestedUser.comment}</span>
                        ) : (
                          <span>No comments.</span>
                        )
                    }
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  )
};

export default InterestedUserSubmissions;
