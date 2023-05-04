import React, { useState } from "react";
import { login } from "../../api/login";

function HandleClick(user) {
  login(user);
}

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //const [password, setPassword] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setUser({
      // spread in previous state with object spread operator
      ...user,
      [e.target.name]: e.target.value,
    });
    // HandleClick(user)
  }

  return (
    <div className="container p-3 w-25 position-absolute top-50 start-50 translate-middle bg-black bg-opacity-75 text-white rounded-bottom">
      <form onSubmit={handleInputChange}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInputChange}
          ></input>
        </div>
              <button
          type="submit"
          className="btn btn-outline-primary btn-lg"
          onClick={() => HandleClick(user)}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
