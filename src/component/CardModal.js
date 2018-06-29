import React from 'react';
import BFormOrText from './BFormOrText';
import ShowMembers from './ShowMembers';

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.props.cards.map((c) => {
      if(c._id === this.props.cardId){
        this.setState({
          card:c
        })
      }
    })
  }

  editTitle = (title) => {
    this.props.editCard(title, this.props.memo);
  }

  editMemo = (memo) => {
    this.props.editCard(this.props.title, memo);
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
            <BFormOrText textClass="title is-5" text={this.props.title} placeholder="" isTextarea={false} setText={this.editTitle}/>
            <div className="control">
              <ShowMembers
              cardMembersId = {this.props.cardMembersId}
              members={this.props.members}
              editCardMembers = {this.editCardMembers}
              />
              
            </div>
            <BFormOrText textClass="memo is-size-6" text={this.props.memo} placeholder="Add description" isTextarea={true} setText={this.editMemo} isMarkdown={true}/>
          </div>
        </div>
        <button className="modal-close is-large" onClick={this.props.toggleModal} aria-label="close"></button>
      </div>
    )
  }
}

export default CardModal;