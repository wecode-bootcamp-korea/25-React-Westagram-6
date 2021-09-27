import React from 'react';

import './Login.scss';

class LoginGoUn extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };
  constructor() {
    super();
    this.state = { id: '' };
    this.state = { pw: '' };
  }
  handleIdInput = event => {
    this.setState({ id: event.target.value });
    this.setState({ pw: event.target.value });
    console.log(event);
  };
  render() {
    return (
      <div className="allBox">
        <div className="outBox">
          <h1>westagram</h1>
          <input
            onChange={this.handleIdInput}
            className="myInfo"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handleIdInput}
            className="myNumber"
            type="password"
            placeholder="비밀번호"
          />
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
