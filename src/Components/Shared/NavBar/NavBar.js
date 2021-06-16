import React from "react";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import { useContext } from "react";
import { userData } from "../../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userData);
  const { email, displayName, name } = loggedInUser;

  const handleSignOut = () => {
    setLoggedInUser("");
  };
  return (
    <Navbar bg="white" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className="navBar-logo">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Collapse className="nav-elements" id="responsive-navbar-nav">
        {loggedInUser.email ? (
          <>
            <Link to="/">
              <li className="navLink">Home</li>
            </Link>
            <Link to="/dashboard/orders">
              <li>Orders</li>
            </Link>
            <Link to="/dashboard/admin">
              <li>Admin</li>
            </Link>
            <Link to="/dashboard/review">
              <li>Review</li>
            </Link>
          </>
        ) : (
          ""
        )}
        {email ? <li>{name || displayName}</li> : ""}

        {email ? (
          <li onClick={handleSignOut}>Sign Out</li>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
