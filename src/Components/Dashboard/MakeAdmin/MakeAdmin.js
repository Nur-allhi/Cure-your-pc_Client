import React from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  let email = "";
  const handleBlur = (e) => {
    email = e.target.value;
  };

  const handleSubmitEmail = () => {
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
      //   body: email,
    })
      .then((res) => res.json)
      .then((fetchData) => console.log(fetchData));
    console.log(email);
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
