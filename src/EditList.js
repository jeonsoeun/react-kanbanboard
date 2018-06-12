// props: [title]
import React from 'react'
import BInput from './BInput'

class EditList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:props.title
    }
  }
  
  editList = () =>{
    if(this.state.title && this.state.title.trim()){
      this.props.editList(this.state.title);
      this.props.toggleEditList();
    }
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  render(){
    return(
      <div className="field">
        <div className="control">
        <BInput placeholder="Title" onChange={this.handleTitle} isTextarea={false} value={this.state.title} />
        </div>
        <div className="control is-grouped">
          <button className="button is-info" onClick={this.editList}>수정</button>
          <button className="button is-text" onClick={this.props.toggleEditList}>취소</button>
        </div>
      </div>
    )
  }
}

export default EditList;