import React from "react";

export const FormBtn = props => (
  <button {...props} 
  style={{ float: "right", marginBottom: 10 }} 
  className="btn btn-success"
  style={{ flex: "1 1 0%", border: "black" }} >
    {props.children}
  </button>
);
