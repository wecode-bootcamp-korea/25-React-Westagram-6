import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginSueYeon extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
    };
  }

  handleId = e => {
    this.setState({
      idVal: e.target.value,
    });
  };

  handlePw = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-yeon');
    /*fetch('http://10.58.4.21:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idVal,
        password: this.state.pwVal,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result)); */
  };

  render() {
    const enableBtn =
      this.state.idVal.includes('@') && this.state.pwVal.length >= 5;

    return (
      <div className="loginBox">
        <h1>westagram</h1>
        <div className="input-wrap">
          <input
            className="userID"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.state.idVal}
            onChange={this.handleId}
          />
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            value={this.state.pwVal}
            onChange={this.handlePw}
          />
          <button
            className={`btn ${enableBtn ? 'activeBtn' : 'disableBtn'}`}
            type="button"
            disabled={!enableBtn}
            onClick={this.goToMain}
          >
            로그인
          </button>
        </div>
        <a className="forgot" href="./Main/Main.js" target="_blank">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default withRouter(LoginSueYeon);
