import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <li className="commentList">
        <span>
          <a href="https://www.instagram.com/porsche.korea/?hl=ko/">
            by.dongwhee
          </a>{' '}
          {this.props.commentList}
        </span>
      </li>
    );
  }
}

export default Comment;
