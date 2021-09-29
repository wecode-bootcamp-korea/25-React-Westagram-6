import React from 'react';
import { Link } from 'react-router-dom';

class Repl extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.value);

    return (
      <>
        <ul className="reply">
          <li>
            <span>tthorri___</span>
            <span className="bold">꽁무니 빼고 도망가는중</span>
          </li>
          {/* <li>
            <span>tthorri___</span>
            <span className="bold">꽁무니 빼고 도망가는중</span>
          </li> */}
        </ul>
        <article>
          <div className="repl">
            <input type="text" placeholder="   댓글달기..." />
            <button className="upload-button">게시</button>
          </div>
        </article>
      </>
    );
  }
}
export default Repl;

/*'버튼' 게시를 클릭하면,

  <li>
  <span>tthorri___</span>
  <span className="bold">꽁무니 빼고 도망가는중</span>
  </li>
가 생길것 */
