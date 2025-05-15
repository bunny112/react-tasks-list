import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"; // Adjust path if SearchToggle.js is in a different folder

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info text-light ">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/about">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "40px",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link" href="#">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/todo" className="nav-link" href="#">
                  Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Button" className="nav-link" href="#">
                  ColorButton
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/toggle" className="nav-link " aria-disabled="true">
                  Toggle
                </Link>
              </li>
            </ul>
            <div className="d-none d-lg-flex align-items-center" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
