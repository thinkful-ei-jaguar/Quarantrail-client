import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Stock from "../../Components/Stock/Stock";
import Activities from "../../Components/Activities/Activities";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GamePage.css";
import StatusBar from "../../Components/StatusBar/StatusBar";
import FirstDay from "../../Components/FirstDay/FirstDay";
import Day from "../../Components/Day/Day";
import gameService from "../../services/gameService";
import Curveball from "../../Components/Curveball.js/Curveball";

export default class GamePage extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
      lose: false
    };
  }
  componentDidMount() {
    if (this.context.day === 0) {
      gameService
        .getGameinfo()
        .then(info => {
          this.context.setPersonInfo(info);
          console.log(this.context);
        })
        .catch(this.context.setError);
    }
  }

  updateLocation = () => {
    this.context.updateLocation("market");
    if (this.context.curveball === false) {
      const rand = Math.random();
      if (rand < 0.5) {
        this.context.updateRenderCurve(true);
      }
    }
  };

  checkIfYadied = () => {
    if (this.context.starter.health >= 100) {
      console.log("dead");
      this.context.setDeath("you caught the disease gg");
      this.setState({ lose: true });
    } else if (this.context.starter.boredom >= 100) {
      console.log("dead2");
      this.context.setDeath("you literally died of boredom");
      this.setState({ lose: true });
    } else if (this.context.starter.food === 0) {
      console.log("dead3");
      this.context.setDeath(
        "you ran out of food had to go home and got the disease during the trip"
      );
      this.setState({ lose: true });
    } else if (this.context.starter.toiletpaper === 0) {
      this.context.setDeath(
        "you ran out of toilet paper you have been stuck in the bathroom for days"
      );
      console.log("dead4");
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
      <section className="gamePage">
        {this.context.day === 0 ? <FirstDay /> : <></>}
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        <Stock />
        <Activities />
        <div className="map">
          <Link to="/market">
            <button disabled={disabled} onClick={this.updateLocation}>
              <FontAwesomeIcon icon="store" />
            </button>
          </Link>
        </div>
        {this.context.renderCurve && <Curveball />}
      </section>
    );
  }
}
