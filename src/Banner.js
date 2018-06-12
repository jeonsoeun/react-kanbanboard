import React from 'react';
import './Banner.css';

class Banner extends React.Component {
  state = {
    isLoggedIn: false
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;
    let userName = this.props.userName;
    userName = userName === "" || userName === undefined ? "(user Name)" : userName;
    return (
      <div className="banner">
        <div className="logo"></div>
        {isLoggedIn ?
          (
            <div className="is-logged-in">
              <i className="user-profile fas fa-user"></i>
              <a className="user-name">{userName}</a>
            </div>
          ) : (
            <div className="is-logged-in">
              <a className="login button is-small is-outlined">로그인</a>
              <a className="join-in button is-small is-link">회원가입</a>
            </div>
          )}
      </div>
    )
  }
}

export default Banner;