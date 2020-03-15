import React from "react";
import { Link } from "react-router-dom";

const UserProject = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="yourProjectStyle">
      <hr />
      <div className="row">
        <div className="col-md-3">Project Title:</div>
        <div className="col-md-9">{props.title}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Description:</div>
        <div className="col-md-9">{props.description}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Votes:</div>
        <div className="col-md-9">{props.votes}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Date:</div>
        <div className="col-md-5">{formattedDate}</div>
        <div className="col-md-2">
          <button
            id="deleteMyProjectButton"
            onClick={event =>
              props.handleValidateDeleteMyProject(event, props._id)
            }
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-md-2">
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
            <button id="editMyProjectButton">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserProject;
