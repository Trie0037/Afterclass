import React from "react";
import { Link } from "react-router-dom";

const UserProject = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="yourProjectStyle">
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">Project Title:</div>
          </div>
          <div className="row">
            <div className="col-md-12 breakWord">{props.title}</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">Description:</div>
          </div>
          <div className="row">
            <div className="col-md-12 breakWord">{props.description}</div>
          </div>
        </div>
        <div className="col-md-1">
          <div className="row">
            <div className="col-md-12">Votes:</div>
          </div>
          <div className="row">
            <div className="col-md-12">{props.votes}</div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">Date:</div>
          </div>
          <div className="row">
            <div className="col-md-12 breakWord">{formattedDate}</div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">
              <button
                id="deleteMyProjectButton"
                onClick={event =>
                  props.handleValidateDeleteMyProject(event, props._id)
                }
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button id="editMyProjectButton">
                <Link
                  to={{
                    pathname: "/editproject/" + props._id,
                    state: [
                      props.title,
                      props.description,
                      props.image,
                      props._id
                    ]
                  }}
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProject;
