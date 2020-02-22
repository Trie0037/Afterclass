/* Nav Bar being rendered on the page here*/
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "blue" }}>
    <div className="container-fluid">
      <Link style={{ headerStyle }} to="/" rel="noopener noreferrer">
        <h1 style={{ color: "Orange", fontSize: "30px"}}>After Class</h1>
      </Link>{" "}
      <Link
        style={linkStyle}
        to={{ pathname: "https://safe-taiga-87184.herokuapp.com/" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </Link>{" "}
      <div>
        <span className="nav-Links">
          <Link style={linkStyle} to="/" rel="noopener noreferrer">
            Home |
          </Link>{" "}
          <Link style={linkStyle} to="/" rel="noopener noreferrer">
            About |
          </Link>{" "}
          <Link style={linkStyle} to="/" rel="noopener noreferrer">
            Projects |
          </Link>{" "}
          <Link style={linkStyle} to="/login" rel="noopener noreferrer">
            Login |
          </Link>{"  "}
          <Link style={linkStyle} to="/" rel="noopener noreferrer">
            Logout |
          </Link>{" "}
          <Link style={linkStyle} to="/signup" rel="noopener noreferrer">
            Signup
          </Link>
        </span>
      </div>
    </div>
  </nav>
);

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "orange",
  textDecoration: "none"
};

export default Nav;
