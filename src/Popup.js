// titile togglePopup
import React from 'react';
import BInput from './BInput'

class Popup extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  stopBubbling = (e) =>{
    e.stopPropagation();
  }

  render(){
    return(
      <div className="Popup box" onClick={this.stopBubbling}>
        <div className="popup-title">
          <p className="title is-7">{this.props.title}</p>
          <button className="button is-white is-small btn-close" onClick={this.props.togglePop}> <i className="fas fa-times" /> </button>
        </div>
        <div className="contents field control">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Popup;