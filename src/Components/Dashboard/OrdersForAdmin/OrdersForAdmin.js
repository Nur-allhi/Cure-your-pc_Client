import React, { useEffect, useState } from "react";
import "./OrdersForAdmin.css";
import { Table } from "react-bootstrap";

const OrdersForAdmin = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {orders.map((tData) => (
            <tr key={tData._id}>
              <td>{tData.name}</td>
              <td>$ {tData.price}</td>
              <td>{tData.personEmail}</td>
              <td>{tData.orderStatus}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersForAdmin;
