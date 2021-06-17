import React, { useEffect } from "react";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../img/logo.png";
import { useContext } from "react";
import { userData } from "../../../App";

const NavBar = () => {
  const { forLoggedInUser, forAdmin } = useContext(userData);
  const [loggedInUser, setLoggedInUser] = forLoggedInUser;
  const { email, displayName } = loggedInUser;
  const [admin] = forAdmin;

  const history = useHistory();

  const handleSignOut = () => {
    setLoggedInUser("");
    history.push("/");
  };
  return (
    <Navbar bg="white" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className="navBar-logo">
        <img src={logo} alt="" />
      </Navbar.Brand>

      <Navbar.Collapse className="nav-elements" id="responsive-navbar-nav">
        <Link to="/">
          <li className="navLink">Home</li>
        </Link>

        <Link to="/dashboard/orders">
          <li>Orders</li>
        </Link>

        <Link to="/dashboard/addtestimonials">
          <li>Review</li>
        </Link>

        {admin ? (
          <Link to="/dashboard/admin">
            <li>Admin</li>
          </Link>
        ) : (
          " "
        )}

        {email ? <li>{displayName}</li> : ""}

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
