import React from "react";
import './Card.css';

const Card = ({name}) => {   // meet 4
  return (
    <>
      <div className="card">
        <div className="container">
        <h1 id="value">{name.Value} </h1>
          <h1 id="name">{name.Name} </h1>
          
        </div>
        
      </div>
      
    </>
  );
};

export default Card;