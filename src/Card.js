/**props: [
 *  title, memo] */
import React from 'react';
import CardForm from './CardForm';
import BFormOrButton from './BFormOrButton';
import EditCard from './EditCard';
import BFormOrText from './BFormOrText';
import CardModal from './CardModal';
import Markdown from './Markdown';

class Card extends React.Component {
  state = {
    isEdit: false,
    isDropdown: false,
    isModal: false
  }

  deleteCard = () => {
    this.props.deleteCard(this.props._id);
  }
  editCancel = () => {
    this.toggleDropdown();
    this.toggleEditForm();
  }

  editCard = (title, memo) => {
    this.props.editCard(this.props._id, this.props.listId, title, memo);
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
      <div className="buttons dropdown">
         <button className="dropdown-trigger button is-white" onClick={this.toggleDropdown}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
         {
          this.state.isDropdown ? (
            <div className="dropdown-content">
              <p className="is-size-6 has-text-centered">List</p>
              <hr/>
              <button className="button is-white btn-close" onClick={this.toggleDropdown}>
                <i className="fas fa-times"/>
              </button>
              <a className="dropdown-item" onClick={this.deleteCard}>delete</a>
              <a className="dropdown-item" onClick={this.editCancel}>edit</a>
            </div>
          ) : <div className="dropdown-off" />
        }
      </div>

    )
    const buttons = (
      <div className="buttons">
        <button className="button is-small is-dark btn-delete" onClick={this.deleteCard}>delete</button>
        <button className="button is-small is-warning btn-edit" onClick={this.toggleEditForm}>edit</button>
      </div>
    )

    const card = (
      <div className="Card-wrap">
      {
          newButtons
      }
      <div className="Card box" onClick={this.handleClickCard}>
        
        <h2 className="title is-6">{this.props.title}</h2>
        <Markdown className="memo is-size-7" contents="aaaaa">{this.props.memo}</Markdown>
      </div>
      </div>
    )

    const editCardForm = (
      <EditCard title={this.props.title} memo={this.props.memo} editCard={this.editCard} toggleEditForm={this.toggleEditForm} />
    )

    const modalBox = (
      <div className="modal is-active">
        <CardModal title={this.props.title} memo={this.props.memo} toggleModal={this.toggleModal} editCard={this.editCard}/> 
      </div>
    )

    return (
      <div className="Card">
        {
          this.state.isEdit ? editCardForm : card
        }
        {
          this.state.isModal && modalBox
        }
      </div>
    )
  }
}

export default Card;