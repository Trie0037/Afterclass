import React from "react";
import "../../App.css";

const UserProject = props => {
  console.log(props);
  return (
  
    <div className="projectStyle">
      <hr></hr>
      <div>title: {props.title}</div>
      <div>description: {props.description}</div>
      <div>votes: {props.votes}</div>
      <div>date: {props.date}</div>
     
    </div>
  );
};

export default UserProject;
