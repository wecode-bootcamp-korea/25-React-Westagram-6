import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

class MainDongWhee extends React.Component {
  render() {
    return (
      <>
        <Nav />

        <main>
          <div className="mainAll">
            <article className="feedWrapper">
              <div className="userId">
                <div className="userPhoto"></div>
                <div className="userName">saymaname456</div>
              </div>
              <div className="feedPhoto"></div>
              <div className="bottomWrapper">
                <section className="buttonsSection">
                  <span className="communicationButtons">
                    <FontAwesomeIcon icon={faHeart} id="farHeart" />
                    <FontAwesomeIcon icon={faComment} id="farComment" />
                    <FontAwesomeIcon icon={faPaperPlane} id="farPaperPlane" />
                  </span>
                  <span id="saved">
                    <FontAwesomeIcon icon={faBookmark} id="farBookmark" />
                  </span>
                </section>

                <section className="likesCount">
                  <div className="likesPersonOne"></div>
                  <div className="likesPersonTwo"></div>
                  <div className="likesHowMany">
                    dongwheekeem님 외 3,110,979명이 좋아합니다
                  </div>
                </section>
                <section className="aboutFeed">
                  <div className="feedCreator">saymaname456</div>
                  <div className="feedExplain">Satisfying View 😍</div>
                </section>
                <ul className="comment">
                  <li>
                    <span className="feedCreator">leediana</span>
                    <span className="feedComment">wow.. pull up!!</span>
                  </li>
                </ul>
                <section className="uploadTime">59분 전</section>
                <div className="commentField">
                  <button className="commentImoticon">
                    <FontAwesomeIcon icon={faSmileWink} id="smileWink" />
                  </button>
                  <input type="text" id="comments" placeholder="댓글 달기..." />
                  <button type="submit" className="submitButton">
                    게시
                  </button>
                </div>
              </div>
            </article>
            <article className="mainRight">
              <div className="myProfile">
                <div className="myPhoto"></div>
                <div className="profileWrapper">
                  <div className="myName">dongwheekeem</div>
                </div>
              </div>
              <div className="recommendSection">
                <p className="topWrapper">
                  <span className="recommend">회원님을 위한 추천</span>
                  <span className="viewAll">모두 보기</span>
                </p>
                <div className="profile">
                  <div className="profilePhoto one"></div>
                  <div className="profileWrap">
                    <div className="recName">apple</div>
                    <div className="recDesc">
                      litandls님 외 896명이 팔로우합니다
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </div>

                <div className="profile">
                  <div className="profilePhoto two"></div>
                  <div className="profileWrap">
                    <div className="recName">lvmh</div>
                    <div className="recDesc">
                      aodlqid님 외 346명이 팔로우합니다
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </div>

                <div className="profile">
                  <div className="profilePhoto three"></div>
                  <div className="profileWrap">
                    <div className="recName">toss.im</div>
                    <div className="recDesc">
                      gkfiwl님 외 108명이 팔로우합니다
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </div>

                <div className="profile">
                  <div className="profilePhoto four"></div>
                  <div className="profileWrap">
                    <div className="recName">kakao</div>
                    <div className="recDesc">
                      vkffkg55님 외 247명이 팔로우합니다
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </div>

                <div className="profile">
                  <div className="profilePhoto five"></div>
                  <div className="profileWrap">
                    <div className="recName">mdn</div>
                    <div className="recDesc">
                      islka님 외 1,357명이 팔로우합니다
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </div>

                <div className="explainSite">
                  <ul>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        도움말
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        소개
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        홍보
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        센터
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        API
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        채용 정보
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        개인정보처리방침
                      </a>
                    </li>
                    <li className="explain">
                      <a href="http://instagram.com" target="_blank">
                        약관
                      </a>
                    </li>
                    <li class="explain">
                      <a href="http://instagram.com" target="_blank">
                        위치
                      </a>
                    </li>
                    <li class="explain">
                      <a href="http://instagram.com" target="_blank">
                        인기 계정
                      </a>
                    </li>
                    <li class="explain">
                      <a href="http://instagram.com" target="_blank">
                        해시태그
                      </a>
                    </li>
                    <li class="explain">
                      <a href="http://instagram.com" target="_blank">
                        언어
                      </a>
                    </li>
                  </ul>
                  <span>© 2021 WESTAGRAM FROM WECODE</span>
                </div>
              </div>
            </article>
          </div>
        </main>
      </>
    );
  }
}

export default MainDongWhee;
