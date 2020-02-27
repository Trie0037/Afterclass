import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ headerStyle }}>
      <h1>After Class</h1>
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
    </header>
  );
};

const headerStyle = {
  background: "purple",
  color: "purple",
  textAlign: "",
  padding: "0px"
};

const linkStyle = {
  color: "#00628c",
  textDecoration: "none",
  padding: "5px",
  cursor: "pointer"
};

export default Header;
