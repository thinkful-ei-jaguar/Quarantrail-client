import React, { Component } from "react";
import BooleanContext from "../../Context/BooleanContext";
import "./LandingPage.css";

export default class LandingPage extends Component {
  static contextType = BooleanContext;
  render() {
    return (
      <div className="landingpage">
        <h1>Corona Trail</h1>
        <button onClick={this.context.renderUser}>Start</button>
      </div>
    );
  }
}
