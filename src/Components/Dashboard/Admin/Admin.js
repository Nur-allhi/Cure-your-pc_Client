import React, { useState, useContext, useEffect } from "react";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddPackageCard from "./../AddPackage/AddPackageCard";
import "./Admin.css";
import { userData } from "./../../../App";
import OrdersForAdmin from "./../OrdersForAdmin/OrdersForAdmin";

const Admin = () => {
  const [loggedInUser] = useContext(userData);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [loggedInUser.email]);
  return (
    <div className="admin-page">
      {admin ? (
        <>
          <div className="add-staffs">
            <MakeAdmin />
            <AddPackageCard />
          </div>
          <OrdersForAdmin />
        </>
      ) : (
        <h1>You are not allowed to enter this page</h1>
      )}
    </div>
  );
};

export default Admin;
