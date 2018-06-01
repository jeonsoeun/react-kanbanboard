import React from 'react';

class CardForm extends React.Component {
  state = {
    isFormVisible: false
  }

  render() {
    return (
      <div className="CardForm">
        <button className="button is-outlined">추가</button>
      </div>
    )
  }
}

export default CardForm;
