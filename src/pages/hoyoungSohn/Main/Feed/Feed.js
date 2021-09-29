import React from 'react';
import { Link } from 'react-router-dom';
import Repl from './Repl/Repl';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      replContents: '',
      color: 'red',
      contents: [],
    };
  }

  onChange = e => {
    this.setState({
      replContents: e.target.value,
    });
  };

  uploadRepl = repl => {
    this.setState({
      reply: this.state.contents.concat(repl),
    });
  };

  render() {
    return (
      <article>
        <header>
          <div className="user-info">
            <Link to="">
              <img alt="myface" src="images/hoyoungSohn/Main/zoomprofile.Png" />
            </Link>
            <span className="icon-name">youthangno_wecode</span>
          </div>
          <Link to="">
            <i className="fas fa-ellipsis-h"></i>
          </Link>
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
            <Link to="">
              <img src="images/hoyoungSohn/main/photo__.jpg" alt="dog" />
            </Link>
            <span className="icon-ment">tthorri__님 외 44명이 좋아합니다</span>
          </div>
        </div>

        <Repl
          color={this.state.color}
          onChange={this.onChange}
          value={this.uploadRepl}
        />
      </article>
    );
  }
}

export default Feed;
