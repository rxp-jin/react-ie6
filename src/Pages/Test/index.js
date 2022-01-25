import React from "react";
import ReactDOM from "react-dom";
import JSON from "JSON2";

const baseURL = "http://10.0.2.2:8080/users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    let request;

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      request = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        console.log(request);
        this.setState({
          users: JSON.parse(request.responseText),
        });
      }
    }.bind(this);

    request.open("GET", baseURL, true);
    request.send();
  }

  render() {
    return (
      <div>
        <div className="container">{this.props.children}</div>
        <button onClick={this.fetchData}>Fetch</button>
        <div>Length: {this.state.users.length}</div>
        {this.state.users.map((u, i) => (
          <div>
            User{i + 1}
            <div>Name: {u.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return <div>TEST</div>;
  }
}

ReactDOM.render(
  <App>
    <Content />
  </App>,
  document.getElementById("app")
);
