import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { userData } from "../../../App";
import "./Orders.css";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userData);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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