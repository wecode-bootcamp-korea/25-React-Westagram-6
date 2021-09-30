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
                <span className="bold">tthorri___</span>
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Recomment;
