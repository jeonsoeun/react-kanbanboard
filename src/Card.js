import React from 'react';

function Card(props){
  return(
    <div className="Card box">
      <h3 className="title is-size-6">{props.title}</h3>
      <p className="memo">{props.memo}</p>
    </div>
  )
}

export default Card;