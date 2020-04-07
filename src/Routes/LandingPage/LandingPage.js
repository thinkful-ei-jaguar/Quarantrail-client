import React, { Component } from "react";
import BooleanContext from "../../Context/BooleanContext";
import "./LandingPage.css";
import Logo from "../../Images/logo.svg";
import Music from "../../Components/Music/Music";
import Song from "../../Sound/8bitmenu.mp3";

export default class LandingPage extends Component {
  static contextType = BooleanContext;

  render() {
    return (
      <div className="landingPage">
        <img src={Logo} alt="quaran trail - stay home" />
        <div className="intro">
          <h1>The year was 2020...</h1>
          <p>
            ...in a world so similar to ours it was pretty much the same world,
            a global pandemic swept across the planet and forced everyone to be
            put in quarantine. It may be easy on day 1 or 2, but a whole week?
            Month? How long can you last? Find out as you journey through
            boredom and risk in QuaranTrail.
          </p>
        </div>
        <button className="introButton" onClick={this.context.renderUser}>
          Start
        </button>
        {/* <p className="player">1 Player</p> */}
      </div>
    );
  }
}
