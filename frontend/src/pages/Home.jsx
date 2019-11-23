import React from "react";
import { Link } from "react-router-dom";
import "../style/home.style.css";

const Home = () => {
  return (
      <div>
          <div className="home-view-container">
              <div classname="home-buttons-container">
              <Link to="/users/login">
                  <button className="home-button">Log In</button>
              </Link>
              <Link to="/users/register">
                  <button className="home-button2">Sign Up</button>
              </Link>
              </div>
          </div>
      </div>
  );
};

export default Home;
