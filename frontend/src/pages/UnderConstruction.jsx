import React from "react";
import { Link } from "react-router-dom";
import "../style/underConstruction.style.css";

const UnderContruction = () => {
    return (
        <div className="coming-soon-body">
            <h2>Coming Soon</h2>
              <img src={require('../assets/coming-soon-img.png')} />
            </div>
        );
    };
    
    export default UnderContruction;