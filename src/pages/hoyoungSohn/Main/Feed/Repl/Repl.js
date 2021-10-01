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
          {commentList.map((data, index) => (
            <Recomment
              key={index}
              userName={data.userName}
              content={data.content}
            />
          ))}
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
