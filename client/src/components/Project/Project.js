import React from "react";
import "../../App.css";

const Project = props => {
  return (
    <div>
      <div>Project Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <div>Creator: {props.username}</div>
      <div>Votes: {props.votes}</div>
      <button
        onClick={event =>
          props.hasUserVotedOnThisProject(event, props.id, "upVote")
        }
        disabled={props.disableUpVoteButton}
      >
        Up Vote
      </button>
      <button
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
