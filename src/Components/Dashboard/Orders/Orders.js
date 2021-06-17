import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { userData } from "../../../App";
import "./Orders.css";

const Orders = () => {
  const { forLoggedInUser } = useContext(userData);
  const [loggedInUser] = forLoggedInUser;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((tData) => (
          <tr key={tData._id}>
            <td>{tData.name}</td>
            <td>$ {tData.price}</td>
            <td>{tData.personEmail}</td>
            <td>{tData.orderStatus}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Orders;
