import React from 'react';
import CommentList from './CommentList';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInput: '',
      commentList: [],
    };
  }

  handleCommentInput = e => {
    console.log(e.target.value);
    this.setState({
      commentInput: e.target.value,
    });
  };

  postComment = e => {
    this.state.commentList.push({
      id: 'lifeofsue',
      input: this.state.commentInput,
    });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <input
          type="text"
          className="commentBox"
          placeholder="댓글 달기..."
          onChange={this.props.handleCommentInput}
        />
        <button className="commentBtn" onClick={this.props.postComment}>
          게시
        </button>
      </>
    );
  }
}

export default Comment;
