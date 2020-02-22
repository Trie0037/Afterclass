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
        style={{
          background: "green",
          color: "#fff",
          border: "none",
          padding: "5px 9px",
          borderRadius: "5%",
          cursor: "pointer",
          marginTop: "5px"
        }}
        onClick={event =>
          props.hasUserVotedOnThisProject(event, props.id, "upVote")
        }
        disabled={props.disableUpVoteButton}
      >
        Up Vote
      </button>
      <button
        style={{
          background: "red",
          color: "#fff",
          border: "none",
          padding: "5px 9px",
          borderRadius: "5%",
          cursor: "pointer",
          marginTop: "5px"
        }}
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
