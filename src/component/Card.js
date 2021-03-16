import React, { useState, useEffect } from 'react';

const Card = (props) => {
  // console.log(props)
  return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name}  onClick={() => props.clickfunct(props.charId) }/>
        <p className="card-text text-center">{props.name}</p>
      </div>
    </div>
  );
};

export default Card;