import React from "react";

function createNum(props) {
  return ( 
    <div className = "Num" onClick={() => props.changePlace(props.id)}>
      <h1> {props.title !== 0 && props.title} </h1> 
    </div>)
};

export default createNum;