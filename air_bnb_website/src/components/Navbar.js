import React from "react";
import vector from "../images/Vector.png";


export default function Navbar()
{
    return(
     <nav>
        <img src={vector} alt="vector" className="nav--logo"/>
     </nav>
    );
}