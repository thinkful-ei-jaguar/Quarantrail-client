import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./LandingPage.css";
import Virus from "../../Images/virus.png";

export default class LandingPage extends Component {
  static contextType = PersonContext;
  render() {
    return (
      <div className="landingpage">
        <img src={Virus} alt="virus logo" />
        <h1>Corona Trail</h1>
        <p>Covid-19</p>
        <button onClick={this.context.renderUser}>Start</button>
        <p className="player">1 Player</p>
      </div>
    );
  }
}
