import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const hidden = () => {
    const menu = document.querySelector("#navbarSupportedContent");
    menu.classList.toggle('none');
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark ">
        <Link className="navbar-brand text-light" to="/">
          HiperDev
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => hidden}
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/singup">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/user">
                User
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;