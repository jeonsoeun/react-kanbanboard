import React, { Component } from 'react';
import List from './List';
import ListForm from './ListForm';

class Board extends Component {

  render() {
    return (
      <div className="contents">
        <div className="Board">
          {
            this.props.lists.map(list => (
              <List
                key={list._id}
                listId={list._id}
                title={list.title}
                cards={
                  this.props.cards.filter(card => (
                    card._listId === list._id
                  ))}
                addNewCard={this.props.addNewCard}
                deleteList={this.props.deleteList}
                editList={this.props.editList}
                deleteCard={this.props.deleteCard}
                editCard={this.props.editCard}
                members={this.props.members}
              />
            ))
          }
          <ListForm addNewList={this.props.addNewList} />
        </div>
      </div>
    )
  }
}

export default Board;