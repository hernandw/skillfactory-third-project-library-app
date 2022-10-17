import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container-fluid header">
      <nav className="navbar navbar-expand-lg d-flex align-items-center h-100 text-white ">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            Tuki Public Library
          </a>
					
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
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item">
                <NavLink  to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="#">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="#">
                  Register
                </NavLink>
              </li>
							<li className="nav-item">
                <NavLink  to="#">
                  Contact
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};