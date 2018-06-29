import React from 'react';
import Card from './Card';
import CardFrom from './CardForm';
import EditList from './EditList';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditList: false
    }
  }
  toggleEditList = () => {
    this.setState({
      isEditList: !this.state.isEditList
    })
  }

  editList = (title) => {
    this.props.editList(this.props.listId, title);
  }

  deleteList = () => {
    this.props.deleteList(this.props.listId);
  }

  render() {
    const editForm = (
      <div className="field">
        <EditList toggleEditList={this.toggleEditList} title={this.props.title} editList={this.editList} />
      </div>
    )
    const list = (
      <div className="field">
        <div className="control">
          <h2 className="title is-size-5">{this.props.title}</h2>
        </div>
        <button className="button is-small is-dark btn-delete" onClick={this.deleteList}>delete</button>
        <button className="button is-small is-warning btn-edit" onClick={this.toggleEditList}>edit</button>
      </div>
    )
    return (
      <div className="List-wrap">
        <div className="List box">
          {
            this.state.isEditList ? editForm : list
          }
          {
            this.props.cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                deleteCard={this.props.deleteCard}
                editCard={this.props.editCard}
                members={this.props.members}
              />
            ))
          }
          <CardFrom
            listId={this.props.listId}
            addNewCard={this.props.addNewCard}
          />
        </div>
      </div>
    )
  }
}

export default List;