import React from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  let email = "";
  const handleBlur = (e) => {
    email = e.target.value;
  };

  const handleSubmitEmail = () => {
    fetch("https://cureyourpc.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    }).then(alert("Admin email added."));
  };

  return (
    <div className="add-admin">
      <h4>Add Admin Here</h4>
      <form>
        <input
          type="email"
          onBlur={handleBlur}
          placeholder="Put here new Admin Email"
        />
        <br />
      </form>
      <button onClick={handleSubmitEmail}>Add admin</button>
    </div>
  );
};

export default MakeAdmin;
