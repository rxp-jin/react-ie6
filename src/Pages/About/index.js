import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return <div>ABOUT</div>;
  }
}

ReactDOM.render(
  <App>
    <Content />
  </App>,
  document.getElementById("app")
);
