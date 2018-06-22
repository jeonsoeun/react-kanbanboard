// titile togglePopup
import React from 'react';

class Popup extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


//이거 잘 안됨.. ㅠ
  componentDidMount(){
    window.addEventListener("click",(ev) => {
      const targetClass = ev.target.className;
      console.log(isPopup)
      if(this.props.isPopup && targetClass!=='Popup'){
        this.props.togglePop();
      }
    })
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