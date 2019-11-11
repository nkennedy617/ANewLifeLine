import React from "react";
import { Link } from "react-router-dom";
import "../style/about.style.css";

const Home = () => {
    return (
        <div>
            <div class = "about-image">
            <img src={ require('../assets/test.jpeg') } />
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
