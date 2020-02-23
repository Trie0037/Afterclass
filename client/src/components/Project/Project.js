import React from "react";
import "../../App.css";

const Project = props => {
  return (
    <div className="upVoteDownVote">
      <div>Project Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <div>Creator: {props.username}</div>
      <div>Votes: {props.votes}</div>
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
