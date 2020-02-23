import React from "react";
import "../../App.css";

const UserProject = props => {
  const formattedDate = props.date.substring(0, 10);
  return (
    <div className="yourProjectStyle">
      <hr />
      <div>Project Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <div>Votes: {props.votes}</div>
      <div>Date: {formattedDate}</div>
    </div>
  );
};

export default UserProject;
