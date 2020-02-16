import React from "react";

const OnePitch = props => {
  return (
    <div key={props._id}>
      <div>title: {props.title}</div>
      <div>description: {props.description}</div>
      <div>username: {props.username}</div>
      <div>upvote: {props.upvote}</div>
      <div>downvote: {props.downvote}</div>
      <button onClick={event => props.handleUpVote(event, props.id)}>
        Up
      </button>
      <button onClick={props.handleDownVote}>Down</button>
      <hr></hr>
    </div>
  );
};
export default OnePitch;
