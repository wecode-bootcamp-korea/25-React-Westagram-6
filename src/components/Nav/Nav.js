import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navigator">
        <span className="navigatorLeft">
          <img
            className="mainLogoPng"
            src="/images/common/instagram.png"
            alt="Main Logo Image"
          />
          <span className="mainLogo">Westagram</span>
        </span>

        <input
          type="text"
          className="searchBar"
          alt=""
          name="search"
          placeholder="검색"
          search
        />

        <span className="navigatorButtons">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="Navigator button"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="Nvigator heart button"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="Navigato my page button"
          />
        </span>
      </nav>
    );
  }
}

export default Nav;
