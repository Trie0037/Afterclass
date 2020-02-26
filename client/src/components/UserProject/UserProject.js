import React from "react";
import "../../App.css";

const UserProject = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="yourProjectStyle">
      <hr />
      <div className="row">
        <div className="col-md-3">
          Project Title:
        </div>
        <div className="col-md-9">
          {props.title}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          Description:
        </div>
        <div className="col-md-9">
          {props.description}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          Votes:
        </div>
        <div className="col-md-9">
          {props.votes}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          Date:
        </div>
        <div className="col-md-5">
          {formattedDate}
        </div>
        <div className="col-md-2">
          <button
            id="deleteMyProjectButton"
            onClick={event => props.handleDeleteMyProject(event, props._id)}
            disabled>
            Delete
          </button>
        </div>
        <div className="col-md-2">
          <button
            id="editMyProjectButton"
            onClick={event => props.handleEditMyProject(event, props._id)}
            disabled>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProject;
