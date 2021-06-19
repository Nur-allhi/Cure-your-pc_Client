import React, { useContext, useEffect, useState } from "react";
import "./OrdersForAdmin.css";
import { Table } from "react-bootstrap";
import { userData } from "../../../App";

const OrdersForAdmin = () => {
  const { forLoggedInUser } = useContext(userData);
  const [loggedInUser] = forLoggedInUser;
  const [orderForAdmin, setOrderForAdmin] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState({});

  useEffect(() => {
    fetch(
      "https://cureyourpc.herokuapp.com/adminPanleorderList?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrderForAdmin(data));
  }, [loggedInUser.email]);

  // Update the Status
  const handleChange = (event) => {
    const updateStatus = event.target.value;
    setStatusUpdate(updateStatus);
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://cureyourpc.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ statusUpdate }),
    });
  };

  return (
    <div>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Order sId</th>
            <th>What need toRepair</th>
            <th>Price</th>
            <th>Email</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orderForAdmin.map((tData) => (
            <tr key={tData._id}>
              <td>{tData._id}</td>
              <td>{tData.name}</td>
              <td>{tData.price}</td>
              <td>{tData.personEmail}</td>
              <td>
                <input
                  type="text"
                  onBlur={handleChange}
                  defaultValue={tData.orderStatus}
                />{" "}
                <button onClick={() => handleStatusUpdate(`${tData._id}`)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersForAdmin;
