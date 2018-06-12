import React from 'react';
import BFormOrButton from './BFormOrButton';
import BInput from './BInput';

class ListForm extends React.Component{
  state = {
    title:""
  }

  resetInput = () => {
    this.setState({
      title:""
    })
  }

  handleTitle = (event) => {
    this.setState({
      title:event.target.value
    })
  }

  addList = () => {
    if(this.state.title.trim().length > 0 && this.state.title !== undefined){
      this.props.addNewList(this.state.title);
    }
  }

  render(){
    return(
      <div className="ListForm">
        <BFormOrButton addList={this.addList} resetInput={this.resetInput} class={"field List box"} btnName={"리스트 추가"}>
          <BInput placeholder="Title" onChange={this.handleTitle} isTextarea={false} value={this.state.title}/>
        </BFormOrButton>
      </div>
    )
  }
}

export default ListForm;