import React from "react";
import "./Title.css";

const Title = props => <h1 key={props._id} className="title">{props.children}</h1>;

export default Title;

