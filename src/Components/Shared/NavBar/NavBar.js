import React from "react";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="white" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand>Cure Your Pc</Navbar.Brand>
      <Navbar.Collapse className="nav-elements" id="responsive-navbar-nav">
        <Link to="/">
          <li className="navLink">Home</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/admin">
          <li>Admin</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
