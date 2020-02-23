import React from "react";
import "../../App.css";

const Project = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="upVoteDownVote">
      <div>Project Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <div>Creator: {props.username}</div>
      <div>Votes: {props.votes}</div>
      <div>Date: {formattedDate}</div>
      <button className="upVoteButton btnStyle"
        onClick={event =>
          props.hasUserVotedOnThisProject(event, props.id, "upVote")
        }
        disabled={props.disableUpVoteButton}
      >
        Up Vote
      </button>
      <button className="downVoteButton btnStyle"
        
        onClick={event =>
          props.hasUserVotedOnThisProject(event, props.id, "downVote")
        }
        disabled={props.disableDownVoteButton}
      >
        Down Vote
      </button>
      <hr></hr>
    </div>
  );
};

export default Project;
