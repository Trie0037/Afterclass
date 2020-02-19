import React from "react";

const Project = props => {
  return (
    <div>
      <div>title: {props.title}</div>
      <div>description: {props.description}</div>
      <div>username: {props.username}</div>
      <div>votes: {props.votes}</div>
      <button onClick={event => props.handleUpVote(event, props.id)}>
        Up
      </button>
      <button onClick={event => props.handleDownVote(event, props.id)}>
        Down</button>
      <hr></hr>
    </div>
  );
};
export default Project;
