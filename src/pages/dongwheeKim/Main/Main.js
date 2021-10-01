import React from 'react';
import Nav from '../../../components/Nav/Nav';
import INFO_LIST from './infoList';
import PROFILE_LIST from './profileList';
import Comment from './Comment';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

class MainDongWhee extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList: [],
    };
  }

  getValue = e => {
    this.setState({ value: e.target.value });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.value),
      value: '',
    });
  };

  addCommentEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  render() {
    return (
      <>
        <span className="MainDongWhee">
          <Nav />

          <main>
            <div className="mainAll">
              <article className="feedWrapper">
                <div className="userId">
                  <div className="userPhoto"></div>
                  <div className="userName">beautifuldestinations</div>
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

                  <section className="likesCountSection">
                    <div className="firstLikePerson"></div>
                    <div className="secondLikePerson"></div>
                    <div className="howManyLikes">
                      dongwheekeem님 외 3,110,979명이 좋아합니다
                    </div>
                  </section>
                  <section className="feed">
                    <div className="feedCreator">beautifuldestinations</div>
                    <div className="feedDesc">
                      In nature, light creates color 😍
                    </div>
                  </section>
                  <ul className="commentSection">
                    <div>
                      <span className="commentCreator">leediana</span>
                      <span className="feedComment">
                        What a stunning view !!!
                      </span>
                      {this.state.commentList.map((comment, i) => {
                        return <Comment commentList={comment} key={i} />;
                      })}
                    </div>
                  </ul>
                  <section className="uploadTime">59분 전</section>
                  <div className="commentField">
                    <button className="commentImoticon">
                      <FontAwesomeIcon icon={faSmileWink} id="smileWink" />
                    </button>
                    <input
                      type="text"
                      id="comments"
                      placeholder="댓글 달기..."
                      onChange={this.getValue}
                      onKeyPress={this.addCommentEnter}
                      value={this.state.value}
                    />
                    <button
                      type="submit"
                      className="submitButton"
                      onClick={this.addComment}
                    >
                      게시
                    </button>
                  </div>
                </div>
              </article>
              <article className="mainRight">
                <div className="myProfile">
                  <div className="myPhoto"></div>
                  <div className="profileWrapper">
                    <div className="myName">by.dongwhee</div>
                  </div>
                </div>
                <div className="recommendSection">
                  <p className="headWrapper">
                    <span className="recommend">회원님을 위한 추천</span>
                    <span className="viewAll">모두 보기</span>
                  </p>

                  {PROFILE_LIST.map(profile => {
                    return (
                      <div key={profile.id} className="profile">
                        <div className={profile.className}></div>
                        <div className="profileWrap">
                          <div className="recName">{profile.name}</div>
                          <div className="recDesc">{profile.followers}</div>
                          <div className="follow">팔로우</div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="explainSite">
                    <ul>
                      {INFO_LIST.map(listData => {
                        return (
                          <li key={listData.id} className="moreInfo">
                            <a href={listData.link} target=" _blank">
                              {listData.content}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <span>© 2021 WESTAGRAM FROM WECODE 25th</span>
                  </div>
                </div>
              </article>
            </div>
          </main>
        </span>
      </>
    );
  }
}

export default MainDongWhee;
