import React, { Component } from "react";
import { Link ,Redirect} from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";
import Character from "../../Components/Character/Character";
import Stock from "../../Components/Stock/Stock";
import Music from "../../Components/Music/Music";
import Curveball from "../../Components/Curveball.js/Curveball";
import Song from "../../Sound/morningmagic.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PetActivities from "../../Components/PetActivities/PetActivities";
import Feedback from '../../Components/Feedback/Feedback'
import "./ParkPage.css";

export default class ParkPage extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
      lose: false,
    };
  }


  updateLocation = () => {
    this.context.updateLocation("home");
  };

  checkIfYadied = () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    if (this.context.day > 5 && rand < this.context.starter.health) {
      this.context.setDeath(`you caught the disease with a ${this.context.starter.health}% chance`);
    }
    if (this.context.starter.health >= 100) {
      this.context.setDeath("you caught the disease gg");
      this.setState({ lose: true });
    } else if (this.context.starter.boredom >= 100) {
      this.context.setDeath("you literally died of boredom");
      this.setState({ lose: true });
    } else if (this.context.starter.food <= 0) {
      this.context.setDeath(
        "you ran out of food had to go home and got the disease during the trip"
      );
      this.setState({ lose: true });
    } else if (this.context.starter.toiletpaper <= 0) {
      this.context.setDeath(
        "you ran out of toilet paper you have been stuck in the bathroom for days"
      );
      this.setState({ lose: true });
    }
  };

  render() {
    this.checkIfYadied();
    if (this.state.lose === true) {
      return <Redirect to="/end" />;
    }
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
        <Character selectCharacter={false} />
        <Stock />
        <div className="map">
          <Link to="/">
            <button disabled={disabled} onClick={this.updateLocation}>
              <FontAwesomeIcon icon="home" />
            </button>
          </Link>
        </div>
        {this.context.renderCurve && <Curveball />}
        {this.context.renderFeedback && <Feedback />}
        <PetActivities />
        <Music song={Song} />
      </section>
    );
  }
}
