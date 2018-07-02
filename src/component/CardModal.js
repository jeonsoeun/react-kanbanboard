import React from 'react';
import BFormOrText from './BFormOrText';
import ShowMembers from './ShowMembers';
import {Link} from 'react-router-dom'

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      card:{
      }
    }

    this.props.cards.map((c) => {
      if(c._id === parseInt(props.cardId)){ 
        this.state={
          card:{
            _id:c._id,
            _listId:c._listId,
            title:c.title,
            memo:c.memo,
            members:c.members
          }
        }
      }
    })
  }

  editTitle = (title) => {
    this.props.editCard(title, this.state.card.memo);
  }

  editMemo = (memo) => {
    this.props.editCard(this.state.card.title, memo);
  }

  editCardMembers = (member) => {
    this.props.editCard(
      this.state.card._id,
      this.state.card._listId,
      this.state.card.title,
      this.state.card.memo,
      member
    )
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.toggleModal} />
        <div className="modal-content">
          <div className="box field">
            <BFormOrText textClass="title is-5" text={this.state.card.title} placeholder="" isTextarea={false} setText={this.editTitle}/>
            <div className="control">
              <ShowMembers
              cardMembersId = {this.state.card.members}
              members={this.props.members}
              editCardMembers = {this.editCardMembers}
              />   
            </div>
            <BFormOrText textClass="memo is-size-6" text={this.state.card.memo} placeholder="Add description" isTextarea={true} setText={this.editMemo} isMarkdown={true}/>
          </div>
        </div>
        <Link to='/board' className="modal-close is-large" aria-label="close"></Link>
      </div>
    )
  }
}

export default CardModal;