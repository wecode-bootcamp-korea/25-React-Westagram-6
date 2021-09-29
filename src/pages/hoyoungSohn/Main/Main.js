/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';

class MainHoYoung extends React.Component {
  constructor() {
    super();
    this.state = {
      repl: '',
    };
  }

  replChange = e => {
    this.setState({
      repl: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Nav />
        <main class="MainHoYoung">
          <div className="feeds">
            <Feed />
          </div>

          <div className="main-right">
            <div className="right-header">
              <Link to="">
                <img alt="flex" src="images/hoyoungSohn/main/flex.png" />
              </Link>
              <div className="header-user">
                <span>flex_bootcamp</span>
                <span>&nbsp;&nbsp;&nbsp;플렉스_bootcam</span>
              </div>
            </div>
            <div className="right-center">
              <div className="center-story">
                <span>스토리</span>
                <span>
                  <Link to="">모두보기</Link>
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
          <Footer />
        </main>
      </>
    );
  }
}

export default MainHoYoung;
