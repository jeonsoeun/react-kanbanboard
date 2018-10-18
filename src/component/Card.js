/**props: [
 *  title, memo] */
import React from 'react';
import EditCard from './EditCard';
//import CardModal from './CardModal';
import Markdown from './Markdown';
import ShowMembers from './ShowMembers';
import {Link} from 'react-router-dom';

class Card extends React.Component {
  state = {
    isEdit: false,
    isDropdown: false,
    isModal: false
  }

  deleteCard = () => {
    this.props.deleteCard(this.props.card._id);
  }
  editCancel = () => {
    this.toggleDropdown();
    this.toggleEditForm();
  }

  editCard = (title, memo) => {
    this.props.editCard(
      this.props.card._id, 
      this.props.card._listId, 
      title, 
      memo, 
      this.props.card.members
    );
  }

  editCardMembers = (members) => {
    this.props.editCard(
      this.props.card._id, 
      this.props.card._listId, 
      this.props.card.title, 
      this.props.card.memo, 
      members
    );
  }

  toggleEditForm = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  handleClickCard = (e) => {
    e.stopPropagation();
    this.toggleModal();
    
  }

  toggleDropdown = () => {
    this.setState({
      isDropdown: !this.state.isDropdown
    })
  }

  toggleModal = () => {
    this.setState({
      isModal: !this.state.isModal
    })
  }

  render() {
    const newButtons = (
      <div className="buttons dropdown is-right">
        <button className="dropdown-trigger button is-white" onClick={this.toggleDropdown}>
          <i className="fas fa-ellipsis-v"></i>
        </button>
        {
          this.state.isDropdown ? (
            <div className="dropdown-content">
              <p className="is-size-6 has-text-centered">List</p>
              <hr />
              <button className="button is-white btn-close" onClick={this.toggleDropdown}>
                <i className="fas fa-times" />
              </button>
              <a className="dropdown-item" onClick={this.deleteCard}>delete</a>
              <a className="dropdown-item" onClick={this.editCancel}>edit</a>
            </div>
          ) : <div className="dropdown-off" />
        }
      </div>
    )

    const card = (
      <div className="Card-wrap">
        {
          newButtons
        }
        <Link to={`board/card/${this.props.card._id}`} className="Card box" onClick={this.handleClickCard}>
          <div className="field">
            <h2 className="title is-6">{this.props.card.title}</h2>
            <Markdown className="memo is-size-7" contents="aaaaa">{this.props.card.memo}</Markdown>
            <ShowMembers
              cardMembersId = {this.props.card.members}
              members={this.props.members}
              editCardMembers = {this.editCardMembers}
            />
          </div>
        </Link>
      </div>
    )

    const editCardForm = (
      <EditCard title={this.props.card.title} memo={this.props.card.memo} editCard={this.editCard} toggleEditForm={this.toggleEditForm} />
    )

    // const modalBox = (
    //   <div className="modal is-active">
    //     <CardModal
    //       title={this.props.card.title}
    //       memo={this.props.card.memo}
    //       toggleModal={this.toggleModal}
    //       editCard={this.editCard}
    //       cardMembersId = {this.props.card.members}
    //       members={this.props.members}
    //       editCardMembers = {this.editCardMembers}
    //     />
    //   </div>
    // )

    return (   
      <div className="Card">
        {
          this.state.isEdit ? editCardForm : card
        }
        {/* {
          this.state.isModal && (<Link to={`/board/card/${this.props.card._id}`}/>)
        } */}
      </div>
    )
  }
}

export default Card;