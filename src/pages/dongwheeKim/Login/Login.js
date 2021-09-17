import React from 'react';
import './Login.scss';

class LoginDongWhee extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <main className="layoutWrapper">
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
              />

              <input
                type="password"
                alt=""
                name="userpw"
                className="loginPw"
                placeholder="  비밀번호"
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
