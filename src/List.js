import React, {Component}  from 'react'
import Card from './Card'
import CardFrom from './CardForm'

function List(props){
  return(
    <div className="List-wrap">
    <div className="List box">
      <h2 className="title is-size-5">{props.title}</h2>
      {
        props.cards.map((card) => (
          <Card key={card._id} title={card.title} memo={card.memo}/>
        ))
      }
      <CardFrom/>
      </div>
    </div>
  )
}

export default List;