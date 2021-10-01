import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <li>
        {this.props.commentId} {this.props.commentText}
      </li>
    );
  }
}

export default Comment;
