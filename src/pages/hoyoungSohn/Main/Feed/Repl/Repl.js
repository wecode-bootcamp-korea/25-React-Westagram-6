import React from 'react';
import { Link } from 'react-router-dom';
import Recomment from './Recomment';

class Repl extends React.Component {
  render() {
    const {
      handleCommentInput,
      commentInput,
      addCommentClick,
      btnEnter,
      commentList,
    } = this.props;

    return (
      <>
        <ul className="reply">
          <li>
            <span>tthorri___</span>
            <span className="bold">꽁무니 빼고 도망가는중</span>
          </li>
          <Recomment commentList={this.props.commentList} />
        </ul>
        <article>
          <div className="repl">
            <input
              type="text"
              placeholder="   댓글달기..."
              onChange={handleCommentInput}
              value={commentInput}
              onKeyPress={btnEnter}
            />
            <button
              className={`uploadButton ${commentInput ? 'buttonOn' : ''}`}
              onClick={addCommentClick}
            >
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Repl;
