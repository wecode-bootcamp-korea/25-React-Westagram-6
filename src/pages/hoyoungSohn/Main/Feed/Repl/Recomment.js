import React from 'react';
import COMMENT_LIST from './commentData';

class Recomment extends React.Component {
  render() {
    return (
      <div className="CommentList">
        <ul>
          {this.props.commentList.map(data => {
            return (
              <li>
                <span>tthorri___</span>
                <span className="bold">{data}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Recomment;
