import React from 'react';
import Popup from './Popup';
import BInput from './BInput';

class ShowMembers extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isAddMemeber:false,
      memberId//아이디들 넣고 그리고 handleMember에서 검사하는 코드 작성
    }
  }

  toggleAddMember = () =>{
    this.setState({
      isAddMemeber:!this.state.isAddMemeber
    })
  }

  handleAddMember = (e) =>{
    e.stopPropagation();
    this.toggleAddMember();
  }

  render(){
    const styles = {
      roundImage:{
        borderRadius: '50%',
        width:'2rem',
        height: '2rem',
      }
    }

    handleMember = (id) => {
      
    }

    const addMemberPopup = (
      <Popup title="AddMember" togglePop={this.toggleAddMember}>
        <BInput placeholder="search member"></BInput>
        <ui className="list members">
        {
          this.props.members.map(member=>(
            <li  key={member.id} onClick={() => this.handMember(member.id)}>
              <div className="list-item">
                <img
                  src={member.image}
                  className="member-image"
                  style={styles.roundImage}
                  title={member.nick+'('+member.id+')'}/>
                <span className="span text is-7 name">{member.nick+' ('+member.id+')'}</span>
                <div className="span check">{this.checkAlready}</div>
              </div>
            </li>
          ))
        } 
        </ui>
      </Popup>
    )

    return(
      <div className="members control is-grouped">
        {
          this.props.cardMembers.map((member) => (
            <img 
              key={member.id}
              src={member.image} 
              alt={member.nick+'('+member.id+')'} 
              className="member-image" 
              style={styles.roundImage}
              title={member.nick+'('+member.id+')'} 
            />
          ))
        }
        <button className="button is-text is-small" onClick={this.handleAddMember}>Add member..</button>
        {
          this.state.isAddMemeber ? 
          (addMemberPopup) : (<div/>)
        }
      </div>
    )
  }
}

export default ShowMembers;