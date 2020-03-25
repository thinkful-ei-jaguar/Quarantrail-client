import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./LandingPage.css";

export default class LandingPage extends Component {
  static contextType = PersonContext;
  render() {
    return (
      <div className="landingpage">
        <h1>Corona Trail</h1>
        <p>Covid-19</p>
        <button onClick={this.context.renderUser}>Start</button>
      </div>
    );
  }
}
