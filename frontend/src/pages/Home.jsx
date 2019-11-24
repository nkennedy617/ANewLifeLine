import React from "react";
import { Link } from "react-router-dom";
import "../style/home.style.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-image-container">
                <img src={require('../assets/landing-page-image.png')} />
            </div>
            <div className="intro-text-container">
                <div className="intro-textbox-title">A New Life Line</div>
                <p></p>
                <p></p>
                <div className="intro-textbox-text">A New Life Line is a social enterprise providing assessment and re-entry support in the form of job placement, training, and mentorship for men transitioning from incarceration to their communities after they are released. A New Life Line combines both in-person and online, asynchronous support from other formerly incarcerated persons along their journey. </div>
            </div>
            <div className="home-buttons-container">
                <Link to="/users/login">
                    <button className="home-button">Log In</button>
                </Link>
                <Link to="/users/register">
                    <button className="home-button2">Sign Up</button>
                </Link>
            </div>
            <div className="landing-tile-area-container">
                <div className="landing-tile-container1">
                    <div className="landing-tile-title">Forum</div>
                    <div className="landing-tile-text">A place to connect with other people...</div>
                </div>
                <div className="landing-tile-container2">
                    <div className="landing-tile-title">Calendar</div>
                    <div className="landing-tile-text">A place to connect with other people...</div>
                </div>
                <div className="landing-tile-container3">
                    <div className="landing-tile-title">Connect</div>
                    <div className="landing-tile-text">A place to connect with other people...</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
