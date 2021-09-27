import React from 'react';
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
    console.log(e.target.value);
    console.log(this.state);
  };

  handlePwInput = a => {
    this.setState({
      pwValue: a.target.value,
    });
    console.log(a.target.value);
    console.log(this.state);
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
            {/* <Link to = './Main'><button className ='loginBtn'>로그인</button></Link> */}
            <button className="loginBtn" onClick={this.goToMain}>
              로그인
            </button>
          </form>
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </>
    );
  }
}

export default LoginHoYoung;
