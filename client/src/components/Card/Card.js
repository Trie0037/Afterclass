import React from "react";
import "../../App.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
        // onClick={() => props.handleJoinButton(props.name)}
      />
    </div>
    <div className="content-unordered-list">
      <ul>
        <li>
          <strong>Title:</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
