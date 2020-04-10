import React, { Component } from "react";

export default class Timer extends Component {
  state = { timer: 10 };

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
    setInterval(this.countDown, 1000);
    setTimeout(this.onTimeOut, 10000);
  }

  componentWillMount() {
    clearTimeout();
    clearInterval();
  }
  render() {
    return <div className="gameTimer"></div>;
  }
}
