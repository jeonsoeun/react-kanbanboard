/** props: [
/ *   BInput: placeholder onChange isTextarea 
/ *   this: value toggleEditForm editCard(id,title,memo)
/ * ]*/
import React from 'react'
import BInput from './BInput';

class EditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      memo: this.props.memo
    }
  }

  editCard = () => {
    if (this.state.title && this.state.title.trim()) {
      this.props.editCard(this.state.title, this.state.memo);
      this.props.toggleEditForm();
    }
  }

  editCancel = () => {
    this.props.toggleEditForm();
  }

  resetInput = () => {
    this.setState(
      (state) => ({
        title: "",
        memo: ""
      })
    )
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleMemo = (event) => {
    this.setState({
      memo: event.target.value
    })
  }

  render() {
    return (
      <div className="field box">
        <BInput placeholder="Title" onChange={this.handleTitle} isTextarea={false} value={this.state.title} />
        <BInput placeholder="Memo" onChange={this.handleMemo} isTextarea={true} value={this.state.memo} />
        <button className="button is-info" onClick={this.editCard}>수정</button>
        <button className="button is-text" onClick={this.editCancel}>취소</button>
      </div>
    )
  }
}

export default EditCard;