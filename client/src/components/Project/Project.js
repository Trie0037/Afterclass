import React from "react";
import "../../App.css";

const Project = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="upVoteDownVote">
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
          Creator:
        </div>
        <div className="col-md-9">
          {props.username}
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
          <button className="upVoteButton btnStyle"
            onClick={event =>
              props.hasUserVotedOnThisProject(event, props.id, "upVote")
            }
            disabled={props.disableUpVoteButton}>
            Up Vote
          </button>
        </div>
        <div className="col-md-2">
          <button className="downVoteButton btnStyle"
            onClick={event =>
              props.hasUserVotedOnThisProject(event, props.id, "downVote")
            }
            disabled={props.disableDownVoteButton}>
            Down Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
