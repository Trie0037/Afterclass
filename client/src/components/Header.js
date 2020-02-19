import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
}

const headerStyle = {
  background: "lightblue",
  color: "orange",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "orange",
  textDecoration: "none"
};
