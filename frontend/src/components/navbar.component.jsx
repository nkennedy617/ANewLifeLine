import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout.component";
import "../style/navbar.style.css";

const NavBar = props => {
  const logout = () => {
    props.logout("/users/logout");
  };
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-lg">
      <Link to="/" exact className="navbar-brand">
        <img src={require('../assets/navbar-logo.png')} />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" exact className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/mainmenu" className="nav-link">
              Tips
            </Link>
          </li>
          {!props.loggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/users/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/users/login" className="nav-link">
                  Login
                </Link>
              </li>

            </>
          ) : (
              <>
                <li className="navbar-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Forum" className="nav-link">
                    Forum
                </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/calendar" className="nav-link">
                    Calendar
                    </Link>
                </li>
                <div class = "nav-right">
                <ul class="nav navbar-nav navbar-right">
                  <li className="navbar-item" >
                    <Logout logout={logout} />
                  </li>
                </ul>
                </div>
              </>
            )}
        </ul>

      </div>
    </nav>
  );
};

export default NavBar;
