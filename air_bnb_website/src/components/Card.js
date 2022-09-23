import React from "react";


//props object has been destructured
export default function Card(props){ //props 
    let badgeText
    
    if(props.openspots === 0){
        badgeText =  "SOLD OUT"
    }
    else if (props.location === " - ONLINE"){
        badgeText = "ONLINE"
    }
    return(
        
    <div className="card">
    {badgeText && <div className="card--badge">{badgeText}</div>}

        <img src={props.photos} alt="photos" className="card--image"/>
    
     <div className="card--stats">
         <img src={props.starImage} alt="star" className="card--star"/>
         <span className="ratings">{props.rating}</span>
         <span className="reviews">{props.review}</span>
         <span className="country">{props.location}</span>
         
         <p className="card--title">{props.title}</p>
         <p className="card--price">{props.price}</p>
     </div>
         
    
    </div>
    
    );
    
}
