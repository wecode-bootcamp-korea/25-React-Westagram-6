import React from 'react';
import COMMENT_LIST from './commentData';

class Recomment extends React.Component {
  render() {
    return (
      <ul>
        {this.props.commentList.map((data, index) => {
          return (
            <li key={index}>
              <span>tthorri___</span>
              <span className="bold">{data}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Recomment;
