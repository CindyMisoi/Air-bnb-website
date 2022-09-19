import React from "react";
import person from "../images/image 12.png";
import star from "../images/Group 65.png";

export default function Card(props){ //props    
    return(
    <div className="card">
        <img src={person} alt="person" className="card--image"/>
        <div className="card--stats">
           <img src={star} alt="star"/>
        </div>

    </div>
    );
}