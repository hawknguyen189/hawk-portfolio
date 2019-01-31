import React from "react";
import { withRouter } from "react-router";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("hello world");
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTopOnMount);
