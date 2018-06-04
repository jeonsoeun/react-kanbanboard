import React, { Component } from 'react';
import List from './List';

class Board extends Component {
  constructor(props){
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
  }
  
  state = {
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
        _listID: 1,
        title: '카드1',
        memo: '메모1'
      },
      {
        _id: 2,
        _listID: 1,
        title: '카드2',
        memo: '메모2'
      },
      {
        _id: 3,
        _listID: 1,
        title: '카드3',
        memo: '메모3'
      },
      {
        _id: 4,
        _listID: 2,
        title: '카드2-1',
        memo: '메모2-1'
      },
      {
        _id: 5,
        _listID: 3,
        title: '카드3-2',
        memo: '메모3-2'
      }
    ],

    listCount:3,
    cardCount:5
  }

  addNewList = () => {
    const newListCount = this.state.listCount+1;
    this.setState({
      listCount:newListCount,
      lists:this.state.lists.concat({
        _id:newListCount,
        title:"새 리스트"
      })
    })
    console.log(this.state.cards);
  }

  addNewCard(listId, title, memo) {
    const newCardCount = this.state.cardCount+1;
    this.setState({
      cardCount:newCardCount,
      cards:this.state.cards.concat({
        _id:newCardCount,
        _listID:listId,
        title:title,
        memo:memo
      })
    })
  }

  render() {
    return (
      <div className="contents">
      <div className="Board">
        {
          this.state.lists.map(list => (
            <List key={list._id}
                  listId={list._id}
                  title={list.title} 
                  cards={
                    this.state.cards.filter(card => (
                    card._listID === list._id
                  ))
                  }
                  addNewCard={this.addNewCard}
            />
          ))
        }
        <button className="button is-outlined" onClick={this.addNewList}>리스트 추가</button>
      </div>
      </div>
    )
  }
}

export default Board;