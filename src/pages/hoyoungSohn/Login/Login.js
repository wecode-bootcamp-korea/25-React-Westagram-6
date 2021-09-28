import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginHoYoung extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-young');
  };

  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="LoginHoYoung">
          <h1>Westagram</h1>
          <form className="login-form">
            <input
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={`loginBtn ${
                this.state.idValue.includes('@') &&
                this.state.pwValue.length >= 5
                  ? 'button-on'
                  : ''
              }`}
              onClick={this.goToMain}
            >
              로그인
            </button>
          </form>
          <Link to="">비밀번호를 잊으셨나요?</Link>
        </div>
      </>
    );
  }
}

export default LoginHoYoung;
