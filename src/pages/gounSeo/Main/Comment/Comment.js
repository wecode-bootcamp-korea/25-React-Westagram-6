import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentId, commentText } = this.props;

    return (
      <li>
        {commentId} {commentText}
      </li>
    );
  }
}

export default Comment;
