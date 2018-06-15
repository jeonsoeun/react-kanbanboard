import React, { Component } from 'react';
import List from './List';
import ListForm from './ListForm';

class Board extends Component {
  constructor(props) {
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
  }

  state = {
    members:[
      {
        id:'A',
        nick:'apple',
        image:'https://placeimg.com/640/480/any/a'
      },
      {
        id:'B',
        nick:'banana',
        image:'https://placeimg.com/480/480/any/b'
      },
      {
        id:'C',
        nick:'cake',
        image:'https://placeimg.com/480/480/any/c'
      },
      {
        id:'D',
        nick:'ban',
        image:'https://placeimg.com/480/480/any/d'
      }
    ],
    lists: [
      {
        _id: 1,
        title: "리스트1"
      },
      {
        _id: 2,
        title: "리스트2"
      },
      {
        _id: 3,
        title: "리스트3"
      },
    ],
    cards: [
      {
        _id: 1,
        _listId: 1,
        title: '카드1',
        memo: '메모1',
        members:['A', 'B','C']
      },
      {
        _id: 2,
        _listId: 1,
        title: '카드2',
        memo: '# Marked in the browser\n\nRendered by **marked**.',
        members:['A', 'C']
      },
      {
        _id: 3,
        _listId: 1,
        title: '카드3',
        memo: '메모3',
        members:['A', 'D']
      },
      {
        _id: 4,
        _listId: 2,
        title: '카드2-1',
        memo: '메모2-1',
        members:[ 'B']
      },
      {
        _id: 5,
        _listId: 3,
        title: '카드3-2',
        memo: '메모3-2',
        members:['A', 'D']
      }
    ],

    listCount: 3,
    cardCount: 5
  }

  addNewList = (title) => {
    const newListCount = this.state.listCount + 1;
    this.setState({
      listCount: newListCount,
      lists: this.state.lists.concat({
        _id: newListCount,
        title: title
      })
    })
  }

  addNewCard(listId, title, memo) {
    const newCardCount = this.state.cardCount + 1;
    this.setState({
      cardCount: newCardCount,
      cards: this.state.cards.concat({
        _id: newCardCount,
        _listId: listId,
        title: title,
        memo: memo
      })
    })
  }

  deleteList = (listId) => {
    this.setState({
      lists: this.state.lists.filter(list => (
        list._id !== listId
      ))
    })
  }

  editList = (listId, title) => {
    this.setState({
      lists: this.state.lists.map((list) => {
        if(list._id !== listId){
          return list;
        }
        return {
          _id:listId,
          title:title
        }
      })
    })
  }

  deleteCard = (cardId) => {
    this.setState({
      cards: this.state.cards.filter(card => (
        card._id !== cardId
      ))
    })
  }

  editCard = (cardId, listId, title, memo) => {
    this.setState({
      cards: this.state.cards.map((card)=>{
        if(card._id !== cardId){
          return card;
        }
        return {
          _id:cardId,
          _listId:listId,
          title:title,
          memo:memo
        }
      })
    })
  }

  render() {
    return (
      <div className="contents">
        <div className="Board">
          {
            this.state.lists.map(list => (
              <List
                key={list._id}
                listId={list._id}
                title={list.title}
                cards={
                  this.state.cards.filter(card => (
                    card._listId === list._id
                  ))}
                addNewCard={this.addNewCard}
                deleteList={this.deleteList}
                editList={this.editList}
                deleteCard={this.deleteCard}
                editCard={this.editCard}
                members={this.state.members}
              />
            ))
          }
          <ListForm addNewList={this.addNewList} />
        </div>
      </div>
    )
  }
}

export default Board;