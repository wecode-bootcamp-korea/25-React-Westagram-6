import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginHoYoung extends React.Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
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

  btnClick = () => {
    console.log(`id는 : ${this.state.email} pw는 : ${this.state.password}`);
  };

  inputKeyPress = e => {
    if (e.key === 'Enter') {
      this.btnClick();
    }
  };

  render() {
    const btnChange =
      this.state.email.includes('@') && this.state.password.length >= 5;

=======
      titleColor: 'b9dffc',
      value: 'a',
    };
  }

  changeColor = () => {
    this.setState({
      titleColor: 'blue',
    });
  };

  render() {
    let inpp = document.getElementsByTagName('input')[0];
    console.log(document.getElementsByClassName('loginBtn'));
>>>>>>> a8111606968a9cf083c5e0488a133d5d58e683e7
    return (
      <>
        <div className="LoginHoYoung">
          <h1>Westagram</h1>
          <form className="login-form">
            <input
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
<<<<<<< HEAD
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
=======
              onInput={this.state.value}
            />
            <input type="password" name="password" placeholder="비밀번호" />
            {/* <Link to = './Main'><button className ='loginBtn'>로그인</button></Link> */}
            <button
              className="loginBtn"
              style={{ backgroundColor: this.state.titleColor }}
              onInput={this.changeColor}
>>>>>>> a8111606968a9cf083c5e0488a133d5d58e683e7
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
