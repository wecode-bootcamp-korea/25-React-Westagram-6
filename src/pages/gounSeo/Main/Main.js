import React from 'react';
import './Main.scss';
import Comment from './Comment/Comment';
class MainGoUn extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: '',
      commentBox: [],
      commentArr: [
        { id: 'canon_mj', text: '베이킹 클래스 즐거웠어~' },
        { id: 'cocoadidi', text: '다음에 또 같이 하자' },
      ],
    };
  }

  handlereplyInput = event => {
    this.setState({ reply: event.target.value });
  };
  clickButton = () => {
    this.setState({
      commentArr: this.state.commentArr.concat({
        id: 'anna',
        text: this.state.reply,
      }),
    });
  };
  render() {
    return (
      <main className="mainGoun">
        <div className="feeds">
          <article>
            <div className="topBar">
              <img alt="sea view and person" src="/images/gounSeo/topbar.jpg" />
              <span>canon_mj </span>
            </div>

            <img
              className="mainPhoto"
              src="/images/gounSeo/deborah-rainford-lk63vqjc1nA-unsplash (1).jpg"
              alt="baking"
            />
            <ul className="middleBar">
              <li className="likeBtn"> </li>
              <li>
                <a href=" ">
                  <i className="fas fa-heart"> </i>
                </a>
              </li>
              <li>
                <a href=" ">
                  <i className="fas fa-upload"></i>
                </a>
              </li>
              <li>
                <a href=" ">
                  <i className="far fa-bookmark"></i>
                </a>
              </li>
            </ul>
            <img
              className="replyPhoto"
              alt="cherry blossom"
              src="/images/gounSeo/ex1.jpg"
            />
            <span className="likeSentence">
              aineworld 님 외 10명이 좋아합니다
            </span>
            <ul className="reply">
              {this.state.commentArr.map((i, index) => (
                <Comment key={index} commentId={i.id} commentText={i.text} />
              ))}
            </ul>
            <span className="timeInfo">42분 전 </span>
          </article>

          <div className="replyBlank">
            <input
              onChange={this.handlereplyInput}
              onkeyPress={this.enterClick}
              placeholder="댓글 달기..."
            />
            <button onClick={this.clickButton}>게시 </button>
          </div>
        </div>

        <img
          className="wecodephoto"
          src="/images/gounSeo/wecodeimg.png"
          alt="wecodeimage"
        />
        <span className="group"> wecode_bootcamp</span>
        <div className="storylist">
          <dl className="storyHeader">스토리</dl>
          <dl className="allView">모두 보기</dl>
          <div className="nameList">
            <img
              className="storyPhoto"
              src="/images/gounSeo/pf3.JPG"
              alt="dessert"
            />
            <dl className="user1">_yum_s</dl>
            <img
              className="storyPhoto"
              src="/images/gounSeo/ex1.jpg"
              alt="cherry blossom"
            />
            <dl className="user2">drink_eat_drink</dl>
            <img
              className="storyPhoto"
              src="/images/gounSeo/ex4.jpg"
              alt="pasta"
            />
            <dl className="user3">hyukyu</dl>
          </div>
        </div>
        <div className="recomandList">
          <dt className="thirdBox">회원님을 위한 추천 </dt>
          <dt className="allView1">모두 보기</dt>
          <img
            className="listPhoto1"
            src="/images/gounSeo/ex10.jpg"
            alt="drink and cake"
          />
          <dt className="user4">joaaaaahye </dt>
          <dd>_legend님 외 2명이 </dd>
          <img
            className="listPhoto2"
            src="/images/gounSeo/ex11.jpg"
            alt="tree"
          />
          <dt className="user5">rampart81</dt>
          <dd>ringo.in.seoul님 외 22명</dd>
          <img
            className="listPhoto3"
            src="/images/gounSeo/ex12.jpg"
            alt="night view"
          />
          <dt className="user6">shawnjjoo</dt>
          <dd>jimmylee1220님 외 1명 </dd>p,p
        </div>
        <div className="footInfo">
          <dl>
            instagram정보.지원. 홍보 센터 채용 정보 .<br />
            개인정보처리방침.약관
            <br />
            디렉터리.프로필.해쉬태그.언어
          </dl>
          <dl>2019 INSTAGRAM </dl>
        </div>
      </main>
    );
  }
}

export default MainGoUn;
