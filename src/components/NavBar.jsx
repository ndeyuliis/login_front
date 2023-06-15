import React from "react";
import { Link } from "react-router-dom";

function NavBar() {


  return (
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
  <Link className="navbar-brand" to="/">
            HiperDev
          </Link>    
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
              <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/">
                  Home
                </Link>
          </li>
          <li class="nav-item">
              <Link className="nav-link active" to="/login">
                  Login
                </Link>
          </li>
          <li class="nav-item">
              <Link className="nav-link active" to="/singup">
                  Register
                </Link>        </li>
          <li class="nav-item dropdown">
              <Link className="nav-link active" to="/user">
                  User
                </Link>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
