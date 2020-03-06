import React from "react";
import { Link } from "react-router-dom";

const HeaderLoggedIn = props => {
  return (
    <header id="applicationTitle">
      <h1>After Class</h1>
      <div className="headerLinks">
        <Link style={linkStyle} to="/">
          Home |
        </Link>{" "}
        <Link style={linkStyle} to="/about">
          About |
        </Link>{" "}
        <Link style={linkStyle} to="/dashboard">
          Dashboard |
        </Link>{" "}
        <Link style={linkStyle} to="/projects">
          Projects |
        </Link>{" "}
        {"  "}
        <span
          onClick={event => props.handleValidateLoggedOut(event)}
          style={linkStyle}
        >
          Logout
        </span>{" "}
      </div>
    </header>
  );
};

const linkStyle = {
  color: "#f1da4e",
  textDecoration: "none",
  padding: "5px",
  cursor: "pointer"
};

export default HeaderLoggedIn;
