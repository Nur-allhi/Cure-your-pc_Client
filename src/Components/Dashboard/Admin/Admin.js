import React, { useContext } from "react";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddPackageCard from "./../AddPackage/AddPackageCard";
import "./Admin.css";
import { userData } from "./../../../App";
import OrdersForAdmin from "./../OrdersForAdmin/OrdersForAdmin";

const Admin = () => {
  const { forAdmin } = useContext(userData);

  const [admin] = forAdmin;
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
