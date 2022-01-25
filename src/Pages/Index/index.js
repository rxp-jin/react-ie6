import React from "react";
import ReactDOM from "react-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

class Content extends React.Component {
  render() {
    return <div>CONTENT</div>;
  }
}

const Web = (props) => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

ReactDOM.render(<Web />, document.getElementById("app"));
