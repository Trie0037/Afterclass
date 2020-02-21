import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ background: "rgb(51, 51, 51)", color: "rgb(255, 255, 255)", boxSizing: "-moz-initialborder-box", lineHeight: 1.4, clear: "both", padding: "10px", margin: 0, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
