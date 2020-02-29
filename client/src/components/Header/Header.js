import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="applicationTitle">
      <h1>After Class</h1>
      <div className="headerLinks">
        <Link style={linkStyle} to="/">
          Home |
      </Link>{" "}
        <Link style={linkStyle} to="/">
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
        <Link style={linkStyle} to="/">
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
  color: "#00628c",
  textDecoration: "none",
  padding: "5px",
  cursor: "pointer"
};

export default Header;
