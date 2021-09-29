import React from 'react';
import './Login.scss';

class LoginDongWhee extends React.Component {
  goToMain = () => {
    fetch('http://10.58.5.59:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.textId,
        password: this.state.textPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    this.props.history.push('/main-whee');
  };

  constructor() {
    super();
    this.state = {
      textId: '',
      textPw: '',
      loginButtonColor: false,
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

  toggleLoginButton = () => {
    if (this.state.textId.includes('@') && this.state.textPw.length > 4) {
      this.setState({
        loginButtonColor: true,
      });
    } else {
      this.setState({
        loginButtonColor: false,
      });
    }
  };

  loginWithEnter = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  render() {
    const { loginButtonColor } = this.state;
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
                onKeyUp={this.toggleLoginButton}
              />
              <input
                type="password"
                alt=""
                name="userpw"
                className="loginPw"
                placeholder="  비밀번호"
                onChange={this.handlePwInput}
                onKeyUp={this.toggleLoginButton}
                onKeyPress={this.loginWithEnter}
              />
            </div>

            <div className="loginBottom">
              <button
                onClick={this.goToMain}
                className={
                  loginButtonColor ? 'loginButtonOn' : 'loginButtonOff'
                }
                type="button"
                disabled={!this.state.loginButtonColor}
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
