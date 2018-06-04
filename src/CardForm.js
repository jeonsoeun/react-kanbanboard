import React from 'react';

class CardForm extends React.Component {
  state = {
    isFormVisible: false,
    title:"",
    memo:""
  }

  toggleForm = () => {
    this.setState(
      (state) => ({
        isFormVisible: !this.state.isFormVisible,
        title:"",
        memo:""
      })
    )
  }

  handleTitle = (event) => {
    this.setState({
      title:event.target.value
    })
  }

  handleMemo = (event) => {
    this.setState({
      memo:event.target.value
    })
  }

  addCard = () => {
    this.props.addNewCard(this.props.listId, this.state.title, this.state.memo);
  }

  render() {
    let isFormVisible = this.state.isFormVisible;
    const addButton = (
      <button className="button is-outlined" onClick={this.toggleForm}>카드 추가</button>
    )
    let inputForm = (
      <div className="input-form">
        <input className="input is-primary card-title" type="text" placeholder="Title" onChange={this.handleTitle}/>
        <textarea className="textarea is-primary card-Memo" type="text" placeholder="Memo" onChange={this.handleMemo}/>
        <button className="button is-primary add-btn" onClick={this.addCard}>추가</button>
        <button className="button is-outlined cancel-btn" onClick={this.toggleForm}>취소</button>
      </div>
    )
    return (
      <div className="CardForm">
        {
          isFormVisible ? (inputForm) : (addButton)
        }
      </div>
    )
  }
}

export default CardForm;
