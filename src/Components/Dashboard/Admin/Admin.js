import React, { useContext, useEffect } from "react";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddPackageCard from "./../AddPackage/AddPackageCard";
import "./Admin.css";
import { userData } from "./../../../App";
import OrdersForAdmin from "./../OrdersForAdmin/OrdersForAdmin";
import axios from "axios";

const Admin = () => {
  const { forAdmin, forLoggedInUser } = useContext(userData);
  const [loggedInUser] = forLoggedInUser;
  const [admin, setAdmin] = forAdmin;

  useEffect(() => {
    axios
      .get(
        `https://cureyourpc.herokuapp.com/isAdmin?email=${loggedInUser?.email}`
      )
      .then((res) => {
        setAdmin(res.data);
      });
  }, []);

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
        <h1 style={{ textAlign: "center", color: "red" }}>
          You are not allowed to access this page. <br />
          This one is for admin Only.
        </h1>
      )}
    </div>
  );
};

export default Admin;
