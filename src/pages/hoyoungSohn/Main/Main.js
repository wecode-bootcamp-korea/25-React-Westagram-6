/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';
import './Main.scss';

class mainHoYoung extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="mainHoYoung">
          <div className="feeds">
            <Feed />
          </div>

          <div className="mainRight">
            <div className="rightHeader">
              <Link to="">
                <img alt="flex" src="images/hoyoungSohn/main/flex.png" />
              </Link>
              <div className="headerUser">
                <span>flex_bootcamp</span>
                <span>&nbsp;&nbsp;&nbsp;플렉스_bootcam</span>
              </div>
            </div>
            <div className="rightCenter">
              <div className="centerStory">
                <span>스토리</span>
                <span>
                  <Link to="">모두보기</Link>
                </span>
              </div>
              <div className="storyPicture">
                <div className="storyPicture01">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture01.jpg"
                  />
                  <span>_yum_s</span>
                </div>
                <div className="storyPicture02">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture02.jpg"
                  />
                  <span>___asap</span>
                </div>
                <div className="storyPicture03">
                  <img
                    alt="user-picture"
                    src="images/hoyoungSohn/main/picture03.jpg"
                  />
                  <span>get--out</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  }
}

export default mainHoYoung;
