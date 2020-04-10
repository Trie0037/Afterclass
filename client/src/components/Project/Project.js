import React from "react";
import "../../App.css";
import thumbDown from "../../assets/images/thumbDown.png";
import thumbUp from "../../assets/images/thumbUp.png";

const Project = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="upVoteDownVote">
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
              <img
                src={thumbUp}
                onClick={event =>
                  props.hasUserVotedOnThisProject(event, props.id, "upVote")
                }
                disabled={props.disableUpVoteButton}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img
                src={thumbDown}
                onClick={event =>
                  props.hasUserVotedOnThisProject(event, props.id, "downVote")
                }
                disabled={props.disableDownVoteButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
