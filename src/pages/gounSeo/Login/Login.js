import React from 'react';

import './Login.scss';

class LoginGoUn extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <div className="allBox">
        <div className="outBox">
          <h1>westagram</h1>
          <input
            className="myInfo"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="myNumber" type="password" placeholder="비밀번호" />
          <button className="btnLogin" onClick={this.gotoMain}>
            로그인
          </button>
          <span className="btnForgot"> 비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}
export default LoginGoUn;
