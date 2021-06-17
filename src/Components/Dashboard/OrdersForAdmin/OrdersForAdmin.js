import React, { useEffect, useState } from "react";
import "./OrdersForAdmin.css";
import { Table } from "react-bootstrap";

const OrdersForAdmin = () => {
  const [orderForAdmin, setOrderForAdmin] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/adminPanleorderList")
      .then((res) => res.json())
      .then((data) => setOrderForAdmin(data));
  }, []);

  // Update the Status

  const handleChange = (event) => {
    const updateStatus = event.target.value;
    setStatusUpdate(updateStatus);
  };
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(statusUpdate),
    }).then((res) => console.log("Response Client", res));
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
                  value={tData.orderStatus}
                />{" "}
                <button onClick={() => handleStatusUpdate(`${tData._id}`)}>
                  Update
                </button>
              </td>
              {/* <td>
                <select>
                  <option onBlur={handleChange} value="Working">
                    Working
                  </option>
                  <option onBlur={handleChange} value="Done">
                    Done
                  </option>
                </select>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersForAdmin;
