import React from "react";
import { Link } from "react-router-dom";
import "../style/home.style.css";
//import "../style/home.style.css";

const Home = () => {
  return (

    //<div>

      /*<div className="home-container">
      <img src={ require('../assets/test.jpg') } />
        <p>Home</p>
        <p>This is the Landing Page</p>
        
      </div>*/
//</div>

<div>
  


    <div class = "home-image">
      <img src={ require('../assets/anewlifelinenew.jpeg') } />
        <Link to="/users/login">
          <button className="home-button">Log In</button>
        </Link>
        <Link to="/users/register">
          <button className="home-button2">Sign Up</button>
        </Link>
    </div>
</div>

  );
};

export default Home;
