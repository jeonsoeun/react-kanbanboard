import React from 'react';
import './Banner.css';

function Banner (props) {
  return(
    <div className="banner">
      <div className="logo"></div>
      <div className="loged-in">
        <div className="img-profile"></div>
        <a className="user-name">{props.userName}</a>
      </div>
      <div className="not-loged-in">
        <a className="btn-login">로그인</a>
        <a className="btn-join-in">회원가입</a>
      </div>
    </div>
  )
}

export default Banner;