import React, { useState } from "react";
import { singUp } from "../../api/singup";

function HandleClick(newUser) {
  singUp(newUser);
}

function SingUp() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: ""
  });
  //const [password, setPassword] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setNewUser({
      // spread in previous state with object spread operator
      ...newUser,
      [e.target.name]: e.target.value,
    });
    // HandleClick(user)
  }

  return (
    <form
      className="container p-3 w-25 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-75 text-white rounded-bottom"
      onSubmit={handleInputChange}
    >
      <div className="mb-3 ">
        <label className="form-label">User Name</label>
        <input
          name="name"
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="UserName"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary btn-lg"
        onClick={() => HandleClick(newUser)}
      >
        Save
      </button>
    </form>
  );
}

export default SingUp;
