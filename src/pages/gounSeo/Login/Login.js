import React from 'react';

import './Login.scss';

class LoginGoUn extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-un');
    /* fetch('http://10.58.1.9:8000/users/signin/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.Id,
        password: this.state.Pw,
        //phone: '010326445555',
        //name: 'anna',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));*/
  };

  constructor() {
    super();
    this.state = { Id: '', Pw: '' };
  }

  handleIdInput = event => {
    this.setState({ Id: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ Pw: event.target.value });
  };

  render() {
    const isValid =
      this.state.Id.indexOf('@') !== -1 && this.state.Pw.length >= 5;

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
            onChange={this.handlePwInput}
            className="myNumber"
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={isValid ? 'changeButtonColor' : 'normalButtonColor'}
            disabled={!isValid}
            onClick={this.goToMain}
          >
            로그인
          </button>
          <span className="btnForgot"> 비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default LoginGoUn;
