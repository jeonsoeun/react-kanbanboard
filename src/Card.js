import React from 'react';

function Card(props){
  return(
    <div className="Card box">
      <h3 className="title is-6">{props.title}</h3>
      <p className="memo is-size-7">{props.memo}</p>
    </div>
  )
}

export default Card;