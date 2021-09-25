import React from 'react';
import './Login.scss';

class LoginDongWhee extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-whee');
  };

  constructor() {
    super();
    this.state = {
      textId: '',
      textPw: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      textId: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      textPw: event.target.value,
    });
  };

  render() {
    return (
      <main className="LoginDongWhee">
        <div className="loginLayout">
          <h1 className="logoName">Westagram</h1>
          <form className="loginValueWrapper">
            <div className="loginInputs">
              <input
                type="text"
                alt=""
                name="userid"
                className="loginId"
                placeholder="  전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                alt=""
                name="userpw"
                className="loginPw"
                placeholder="  비밀번호"
                onChange={this.handlePwInput}
              />
            </div>

            <div className="loginBottom">
              <button
                onClick={this.goToMain}
                className="loginButton"
                type="button"
              >
                로그인
              </button>

              <div className="forgetPw">비밀번호를 잊으셨나요?</div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default LoginDongWhee;
