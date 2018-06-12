import React from 'react'

class BFormOrButton extends React.Component{
  state = {
   isFormVisible: false
  }

  toggleForm = () => {
    this.setState({
      isFormVisible:!this.state.isFormVisible
    });
    this.props.resetInput();
  }

  addCard = () => {
    this.props.addCard();
    this.toggleForm();
  }

  render() {
    const isFormVisible = this.state.isFormVisible;
    const addButton = (
      <button className="button is-outlined" onClick={this.toggleForm}>{this.props.btnName}</button>
    )
    let inputForm = (
      <div className={this.props.class}>
        {this.props.children}
        <div className="control is-grouped">
          <button className="button is-primary" onClick={this.addCard}>추가</button>
          <button className="button is-text" onClick={this.toggleForm}>취소</button>
        </div>
      </div>
    )
    return(
      <div className="BFromOrButton">
        {
          isFormVisible ? inputForm : addButton 
        }
      </div>
    );
  }
}

export default BFormOrButton;