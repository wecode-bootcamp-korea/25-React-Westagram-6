import React from 'react';
import Comment from './Comment/Comment';
import './Main.scss';

class MainSueYeon extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="nav-wrapper">
            <div className="brand">
              <img
                className="logo"
                alt="Westagram Logo"
                src="/images/westa.png"
              />
              <h2 className="bar"> | </h2>
              <h2 className="name">Westagram</h2>
            </div>
            <input type="text" className="search" placeholder="검색" />
            <div className="navIcons">
              <img
                className="icon"
                alt="Explore Button"
                src="/images/explore.png"
              />
              <img
                className="icon"
                alt="Heart Button"
                src="/images/heart.png"
              />
              <img
                className="icon"
                alt="User Button"
                src="/images/profile.png"
              />
              <div className="icon userProfile">
                <img alt="User Profile Pic" src="/images/me.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="feeds">
            <div className="article">
              <div className="info">
                <div className="user">
                  <div className="profilePic">
                    <img alt="Mukja's Pic" src="/images/mukja.png" />
                  </div>
                  <p className="username">mukja_cat</p>
                </div>
                <img
                  className="options"
                  alt="Option Button"
                  src="/images/option.png"
                />
              </div>
              <img
                className="post-img"
                alt="Baby Mukja"
                src="/images/babymukja.png"
              />
              <div className="post-content">
                <div className="rxn-wrapper">
                  <img
                    className="icon"
                    alt="Like Button"
                    src="/images/heart.png"
                  />
                  <img
                    className="icon"
                    alt="Comment Button"
                    src="/images/comment.png"
                  />
                  <img
                    className="icon"
                    alt="Share Button"
                    src="/images/share.png"
                  />
                </div>
                <p className="likes">
                  <strong>20명</strong>이 좋아합니다
                </p>
                <p className="description">
                  <span> mukja_cat </span> Can I have some wet food, please?{' '}
                </p>
                <p className="post-time">42분 전</p>
              </div>

              <div className="commentWrapper">
                <Comment />
              </div>
            </div>
          </div>

          <div className="main-right">
            <div className="profile">
              <div className="profilePicture">
                <img alt="lifeofsue Pic" src="/images/me.png" />
              </div>
              <div>
                <p className="username">lifeofsue</p>
                <p className="subTxt">Sueyeon Yoon</p>
              </div>
            </div>

            <p className="suggestion">스토리</p>
            <div className="profile">
              <div className="profilePicture">
                <img alt="acid-p Pic" src="/images/ss.png" />
              </div>
              <div>
                <p className="username">acid-p</p>
                <p className="subTxt">16분 전</p>
              </div>
            </div>

            <div className="profile">
              <div className="profilePicture">
                <img alt="imthesun Pic" src="/images/ty.png" />
              </div>
              <div>
                <p className="username">imthesun</p>
                <p className="subTxt">20시간 전</p>
              </div>
            </div>

            <div className="profile">
              <div className="profilePicture">
                <img alt="_lighttt Pic" src="/images/article.png" />
              </div>
              <div>
                <p className="username">_lighttt</p>
                <p className="subTxt">8시간 전</p>
              </div>
            </div>

            <p className="suggestion">회원을 위한 추천</p>
            <div className="profile">
              <div className="profilePicture">
                <img alt="ggggggh-yang Pic" src="/images/gh.png" />
              </div>
              <div>
                <p className="username">ggggggh-yang</p>
                <p className="subTxt">양양양양양</p>
              </div>
              <button className="followBtn">팔로우</button>
            </div>

            <div className="profile">
              <div className="profilePicture">
                <img alt="im31 Pic" src="/images/kh.png" />
              </div>
              <div>
                <p className="username">im31</p>
                <p className="subTxt">JKH</p>
              </div>
              <button className="followBtn">팔로우</button>
            </div>

            <div className="profile">
              <div className="profilePicture">
                <img alt="minji_5181 Pic" src="/images/mj.png" />
              </div>
              <div>
                <p className="username">minji_5181</p>
                <p className="subTxt">Minji Jung</p>
              </div>
              <button className="followBtn">팔로우</button>
            </div>

            <div className="westaCopyright">
              <p>
                Instagram 정보.지원.홍보 센터.API.
                <br />
                채용 정보.개인정보처리방침.약과.
                <br />
                디렉터리.프로필.해시태그.언어
                <br />
                <br />© 2021 INSTAGRAM{' '}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainSueYeon;
