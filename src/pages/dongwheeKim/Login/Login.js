import React from 'react';
import './Login.scss';

class LoginDongWhee extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
    };
  }

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

  handleInput = event => {
    console.log([event.target.name]);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // toggleLoginButton = () => {
  //   if (this.state.userId.includes('@') && this.state.userPw.length > 4) {
  //     this.setState({
  //       loginButtonColor: true,
  //     });
  //   } else {
  //     this.setState({
  //       loginButtonColor: false,
  //     });
  //   }
  // };

  loginWithEnter = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  render() {
    const { loginButtonColor } = this.state;
    const isVaild =
      this.state.userId.includes('@') && this.state.userPw.length > 4;
    return (
      <main className="loginDongWhee">
        <div className="loginLayout">
          <h1 className="logoName">Westagram</h1>
          <form className="loginValueWrapper">
            <div className="loginInputs">
              <input
                type="text"
                name="userId"
                className="loginId"
                placeholder="  전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleInput}
                onKeyUp={this.toggleLoginButton}
              />
              <input
                type="password"
                alt=""
                name="userPw"
                className="loginPw"
                placeholder="  비밀번호"
                onChange={this.handleInput}
                onKeyUp={this.toggleLoginButton}
                onKeyPress={this.loginWithEnter}
              />
            </div>

            <div className="loginBottom">
              <button
                onClick={this.goToMain}
                className={isVaild ? 'loginButtonOn' : 'loginButtonOff'}
                type="button"
                disabled={!isVaild}
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
