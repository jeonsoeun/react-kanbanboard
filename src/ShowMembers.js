import React from 'react';
import Popup from './Popup';
import BInput from './BInput';

class ShowMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMemeber: false
    }
  }

  toggleAddMember = () => {
    this.setState({
      isAddMemeber: !this.state.isAddMemeber
    })
  }

  handleAddMember = (e) => {
    e.stopPropagation();
    this.toggleAddMember();
  }

  handleMember = (id) => {
    if (this.isMember(id)) {
      this.props.editCardMembers(this.props.cardMembersId.filter(member => {
             return member !== id
           }
           )
         )
    } else {
      this.props.editCardMembers(this.props.cardMembersId.concat(id));
    }
  }

  checkCardMember = (id) => {
    if (this.isMember(id)) {
      return (<i className="fas fa-check"></i>)
    }
  }

  isMember = (id) => {
    for (let i = 0; this.props.cardMembersId[i]; i++) {
      if (this.props.cardMembersId[i] === id) {
        return true;
      }
    }
    return false;
  }

  render() {
    const styles = {
      roundImage: {
        borderRadius: '50%',
        width: '2rem',
        height: '2rem',
      }
    }

    const addMemberPopup = (
      <Popup title="AddMember" togglePop={this.toggleAddMember} isPopup={this.state.isAddMemeber}>
        <BInput placeholder="search member"></BInput>
        <ul className="list members">
          {
            this.props.members.map(member => (
              <li key={member.id} onClick={() => this.handleMember(member.id)}>
                <div className="list-item">
                  <img
                    src={member.image}
                    className="member-image"
                    style={styles.roundImage}
                    title={member.nick + '(' + member.id + ')'} />
                  <span className="member is-7 name">{member.nick + ' (' + member.id + ')'}</span>
                  <p className="member-check">{this.checkCardMember(member.id)}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </Popup>
    )

    return (
      <div className="members control is-grouped">
        {
          this.props.members.map((member) => {
            if (this.props.cardMembersId.includes(member.id)) {
              return (
                <img
                  key={member.id}
                  src={member.image}
                  alt={member.nick + '(' + member.id + ')'}
                  className="member-image"
                  style={styles.roundImage}
                  title={member.nick + '(' + member.id + ')'}
                />
              )
            }
          })
        }
        <button className="button is-text is-small" onClick={this.handleAddMember}>Add member..</button>
        {
          this.state.isAddMemeber ?
            (addMemberPopup) : (<div />)
        }
      </div>
    )
  }
}

export default ShowMembers;