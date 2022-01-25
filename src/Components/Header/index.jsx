import React from "react";
// import { Link } from "router";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/About.html">About</a>
            </li>
            <li>
              <a href="/Test.html">Test</a>
            </li>
            {/* <li>
              <Link to="test">Router test</Link>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
