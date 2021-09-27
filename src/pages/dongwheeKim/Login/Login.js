import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
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
    // if (this.state.loginButtonColor) {
    //   this.setState({
    //     loginButtonColor: false,
    //   });
    // } else {
    //   this.setState({
    //     loginButtonColor: true,
    //   });
    // }

    //   this.setState({
    //     loginButtonColor: this.state.loginButtonColor ? false : true,
    //   });
    // };

    // this.setState({
    //   loginButtonColor: !this.state.loginButtonColor,
    // });

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

  render() {
    console.log(this.state);
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
              />
            </div>

            <div className="loginBottom">
              <button
                onClick={this.goToMain}
                className={
                  loginButtonColor ? 'loginButtonOn' : 'loginButtonOff'
                }
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
