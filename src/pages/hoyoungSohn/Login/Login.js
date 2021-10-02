import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class loginHoyoung extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/main-young');
    // fetch('http://10.58.3.77:8000/user_login/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  inputEnterPress = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  render() {
    const isBtnColorChange =
      this.state.email.includes('@') && this.state.password.length >= 5;

    return (
      <>
        <div className="loginHoYoung">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              name="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              onKeyPress={this.inputEnterPress}
            />
            <button
              type="button"
              className={`loginBtn ${isBtnColorChange ? 'buttonOn' : ''}`}
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

export default loginHoyoung;
