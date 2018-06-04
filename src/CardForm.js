import React from 'react';

class CardForm extends React.Component {
  state = {
    isFormVisible: false
  }

  addCard = () => {
    this.setState(
      (state) => ({
        isFormVisible: true
      })
    )
  }

  render() {
    let isFormVisible = this.state.isFormVisible;
    return (
      <div className="CardForm">
        {isFormVisible ? (
          <p>Form</p>
        ) : (
            <button className="button is-outlined" onClick={this.addCard}>추가</button>
        )}
      </div>
    )
  }
}

export default CardForm;
