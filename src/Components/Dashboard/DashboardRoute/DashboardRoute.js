import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DashboardRoute.css";

const DashboardRoute = () => {
  return (
    <Navbar className="dashboard-nav" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="nav-elements" id="responsive-navbar-nav">
        <Link to="/">
          <li className="navLink">Home</li>
        </Link>
        <Link to="/dashboard/orders">
          <li>Orders</li>
        </Link>
        <Link to="/dashboard/orderlist">
          <li>Order List</li>
        </Link>
        <Link to="/dashboard/review">
          <li>Review</li>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardRoute;
