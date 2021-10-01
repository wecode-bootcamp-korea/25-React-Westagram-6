import React from 'react';

class Recomment extends React.Component {
  render() {
    console.log(this.props.content);
    return (
      <li>
        <span>{this.props.userName}</span>
        <span className="bold">{this.props.content}</span>
      </li>
    );
  }
}

export default Recomment;
