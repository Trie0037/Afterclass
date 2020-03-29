import React from "react";
import "../../App.css";

const Project = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="upVoteDownVote">
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
                className="upVoteButton btnStyle"
                onClick={event =>
                  props.hasUserVotedOnThisProject(event, props.id, "upVote")
                }
                disabled={props.disableUpVoteButton}
              >
                Up Vote
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                className="downVoteButton btnStyle"
                onClick={event =>
                  props.hasUserVotedOnThisProject(event, props.id, "downVote")
                }
                disabled={props.disableDownVoteButton}
              >
                Down Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
