import React from "react";

export const FormBtn = props => (
  <button
    {...props}
    style={{ float: "right", marginBottom: 10, flex: "1 1 0%", border: "black" }}
    className="btn btn-success"
  >
    {props.children}
  </button>
);
