import React from "react";
import { Link } from "react-router-dom";

const HeaderLoggedOut = () => {
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
        <Link
          style={linkStyle}
          to={{ pathname: "https://after-class.herokuapp.com/" }}
          target="_blank"
        >
          Projects |
        </Link>{" "}
        <Link style={linkStyle} to="/login">
          Login |
        </Link>
        {"  "}
        <Link style={linkStyle} to="/logout">
          Logout |
        </Link>{" "}
        <Link style={linkStyle} to="/signup">
          Signup
        </Link>
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

export default HeaderLoggedOut;
