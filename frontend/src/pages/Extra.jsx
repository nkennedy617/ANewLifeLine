import React from "react";
import { Link } from "react-router-dom";
import "../style/about.style.css";

const MainMenu = () => {
    return (
        <div className="tips-container">
            <p></p>
            <div className="about-image">
                <img src={require('../assets/tips-page-image.png')} class="center" />
            </div>
            <div className="about-text-container">
                <div className="intro-textbox-title">A Getting Started Guide</div>
                <p></p>
                <div className="about-textbox-text"> New Life Line can help you, let us show you how!
    This page is a step by step guide of how your users can work with new life like, what they should expect (...this could be bullet points)
    We will help you break the cycle </div>
                <div className="about-textbox-text">
                    Statistics of the cycle, cause a lot of people don't know they are part of a trillion dollar game… ( have links here about recidivism)
    We help you ….. Be a better father, husband, man. </div>
                <div className="about-textbox-text">
                    We provide you with life changing skills to define a new future
                    Statistic about why many offenders re-offend
                    Lack of skills, institutionalized mindset,  lack of employment opportunity lack of support
                    Many reentry programs have a one size fits all model. We assess where you are and what are the biggest factors you need to put you on the path for success</div>
                <div className="about-textbox-text">
                    We provide you support because we have walked the yard in your shoes
                    Statistics of success of peer support group programs
                    A and weight watchers, narcotics anonymous , etc
                    Why are they successful</div>
                <div className="about-textbox-text">
                    New Life Line Support structure is based on Felons helping Felons</div>
                <div className="about-buttons-container">
                    <Link to="/users/register">
                        <button className="register-button">Sign me up!</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default MainMenu;