import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginHoYoung extends React.Component {
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

  handleIdInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  inputKeyPress = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  render() {
    const btnChange =
      this.state.email.includes('@') && this.state.password.length >= 5;

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
              onKeyPress={this.inputKeyPress}
            />
            <button
              className={`loginBtn ${btnChange ? 'button-on' : ''}`}
              onClick={(this.inputKeyPress, this.goToMain)}
              value="button"
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
