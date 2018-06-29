// titile togglePopup
import React from 'react';

class Popup extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  // ** 다른 부분 누르면 팝업창 닫힘.
  handlePopup = (ev) => {
const targetClass = ev.target.className;
      if(this.props.isPopup && targetClass!=='Popup'){
        this.props.togglePop();
      }
  }
  componentDidMount(){
    window.addEventListener("click",this.handlePopup);
  }
  componentWillUnmount(){
    window.removeEventListener("click", this.handlePopup);
  }
// **

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