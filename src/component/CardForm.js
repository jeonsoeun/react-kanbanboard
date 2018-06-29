import React from 'react';
import BInput from './BInput'
import BFormOrButton from './BFormOrButton'

class CardForm extends React.Component {
  state = {
    title:"",
    memo:""
  }

  resetInput = () => {
    this.setState(
      (state) => ({
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
    if(this.state.title && this.state.title.trim()){
      this.props.addNewCard(this.props.listId, this.state.title, this.state.memo);
      return true;
    }
    return false;
  }

  render() {
    return (
      <BFormOrButton addCard={this.addCard} resetInput={this.resetInput} btnName={"카드추가"} class="field box">
        <BInput placeholder="Title" onChange={this.handleTitle} isTextarea={false}/>
        <BInput placeholder="Memo" onChange={this.handleMemo} isTextarea={true}/>
      </BFormOrButton>
    )
  }
}

export default CardForm;
