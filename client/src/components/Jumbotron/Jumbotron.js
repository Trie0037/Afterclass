import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ background: "darkorange", height: 200, clear: "both", paddingTop: 80, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
