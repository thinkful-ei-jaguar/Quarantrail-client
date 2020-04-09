import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Stock from "../../Components/Stock/Stock";
import Music from "../../Components/Music/Music";
import Activities from "../../Components/Activities/Activities";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GamePage.css";
import StatusBar from "../../Components/StatusBar/StatusBar";
import FirstDay from "../../Components/FirstDay/FirstDay";
import Day from "../../Components/Day/Day";
import gameService from "../../services/gameService";
import Curveball from "../../Components/Curveball.js/Curveball";
import Character from "../../Components/Character/Character";
import Song from "../../Sound/8bitsurf.mp3";
import Pet from "../../Components/Pet/Pet";
import TV from "../../Components/TV/TV";
import Phone from "../../Components/Phone/Phone";
import Feedback from "../../Components/Feedback/Feedback";
export default class GamePage extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
      lose: false,
      active: false
    };
  }
  componentDidMount() {
    console.log(this.state);
    console.log(this.context);
    if (this.context.day === 0) {
      gameService
        .getGameinfo()
        .then(info => {
          this.context.setPersonInfo(info);
        })
        .catch(this.context.setError);
      this.context.clearActivites();
    }
    this.setState({
      active: true
    });
  }

  updateLocationM = () => {
    this.context.updateLocation("market");
    this.context.addToHealth(5);
    if (this.context.curveball === false) {
      const rand = Math.random();
      if (rand < 0.5) {
        this.context.updateRenderCurve(true);
      }
    }
  };

  updateLocationP = () => {
    this.context.updateLocation("park");
    this.context.addToHealth(5);
    if (this.context.curveball === false) {
      const rand = Math.random();
      if (rand < 0.5) {
        this.context.updateRenderCurve(true);
      }
    }
  };

  checkIfYadied = () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    if (this.context.day > 5 && rand < this.context.starter.health) {
      this.context.setDeath(
        `you caught the disease with a ${this.context.starter.health}% chance`
      );
      this.setState({ lose: true });
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
      <section className="gamePage gameSetting">
        {this.context.day === 0 ? <FirstDay /> : <></>}
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        {this.context.renderPhone && <Phone />}
        {this.context.TV && <TV />}
        <Character selectCharacter={false} />
        <Pet />
        <Stock />
        <Activities />
        <div className="map">
          <Link to="/market">
            <button
              id="first"
              className="interactiveButton"
              disabled={disabled}
              onClick={this.updateLocationM}
            >
              <FontAwesomeIcon icon="store" />
            </button>
          </Link>
          <Link to="/park">
            <button
              id="second"
              className="interactiveButton"
              disabled={disabled}
              onClick={this.updateLocationP}
            >
              <FontAwesomeIcon icon="tree" />
            </button>
          </Link>
        </div>
        {this.context.renderCurve && <Curveball />}
        {this.context.renderFeedback && <Feedback />}
        <Music song={Song} />
      </section>
    );
  }
}
