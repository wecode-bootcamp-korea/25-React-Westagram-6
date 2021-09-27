/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

class MainHoYoung extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main class="MainHoYoung">
          <div className="feeds">
            <article>
              <header>
                <div className="user-info">
                  <a href="">
                    <img
                      alt="myface"
                      src="images/hoyoungSohn/Main/zoomprofile.Png"
                    />
                  </a>
                  <span className="icon-name">youthangno_wecode</span>
                </div>
                <a href="">
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </header>

              <img
                className="car"
                alt="car"
                src="images/hoyoungSohn/main/car.jpg"
                width="100%"
              />

              <div className="feeding">
                <div className="like-icon">
                  <div>
                    <button>
                      <i className="far fa-heart"></i>
                    </button>
                    <button>
                      <i className="far fa-comment"></i>
                    </button>
                    <button>
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                  <div>
                    <button>
                      <i className="far fa-flag"></i>
                    </button>
                  </div>
                </div>
                <div className="friend-info">
                  <a href="">
                    <img src="images/hoyoungSohn/main/photo__.jpg" alt="dog" />
                  </a>
                  <span className="icon-ment">
                    tthorri__님 외 44명이 좋아합니다
                  </span>
                </div>
              </div>

              <div className="friends-reply">
                <p className="canon_mj">
                  <span>tttiii___</span>
                  <span>꽁무니 빼고 도망가는중</span>
                </p>
                <button>
                  <i className="far fa-heart"></i>
                </button>
              </div>

              <ul className="reply">{/* <li>리플달자</li> */}</ul>
            </article>

            <article>
              <div className="repl">
                <input type="text" placeholder="   댓글달기..." />
                <button className="upload-button">게시</button>
              </div>
            </article>
          </div>

          <div className="main-right">
            <div className="right-header">
              <a href="">
                <img alt="flex" src="images/hoyoungSohn/main/flex.png" />
              </a>
              <div className="header-user">
                <span>flex_bootcamp</span>
                <span>&nbsp;&nbsp;&nbsp;플렉스_bootcam</span>
              </div>
            </div>
            <div className="right-center">
              <div className="center-story">
                <span>스토리</span>
                <span>
                  <a href="">모두보기</a>
                </span>
              </div>
              <div className="story-picture">
                <div className="story-picture01">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture01.jpg"
                  />
                  <span>_yum_s</span>
                </div>
                <div className="story-picture02">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture02.jpg"
                  />
                  <span>___asap</span>
                </div>
                <div className="story-picture03">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture03.jpg"
                  />
                  <span>get--out</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MainHoYoung;
