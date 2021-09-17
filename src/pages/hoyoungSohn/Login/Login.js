import React from 'react';
import './Login.scss';

class LoginHoYoung extends React.Component {
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
            />
            <input type="password" name="password" placeholder="비밀번호" />
            {/* <Link to = './Main'><button className ='loginBtn'>로그인</button></Link> */}
            <button className="loginBtn" onClick={this.gotoMain}>
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
