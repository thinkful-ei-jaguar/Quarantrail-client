import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";
import Stock from "../../Components/Stock/Stock";
import Music from "../../Components/Music/Music";
import Curveball from "../../Components/Curveball.js/Curveball";
import Song from "../../Sound/morningmagic.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PetActivities from "../../Components/PetActivities/PetActivities";

export default class ParkPage extends Component {
  static contextType = PersonContext;

  updateLocation = () => {
    this.context.updateLocation("home");
  };

  render() {
    let disabled;
    if (this.context.renderCurve) {
      disabled = true;
    } else {
      disabled = false;
    }
    return (
      <section className="parkpage gameSetting">
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        <Stock />
        <div className="map">
          <Link to="/">
            {/* <button disabled={disabled} onClick={this.updateLocation}><FontAwesomeIcon icon="home" /></button> */}
            <button onClick={this.updateLocation}>
              <FontAwesomeIcon icon="home" />
            </button>
          </Link>
        </div>
        {/*this.context.renderCurve && <Curveball />*/}
        <PetActivities />
        <Music song={Song} />
      </section>
    );
  }
}
