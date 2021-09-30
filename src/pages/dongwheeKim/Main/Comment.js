import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <>
        <li>{this.props.commentList}</li>
      </>
    );
  }
}

export default Comment;
