import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";
import Stock from "../../Components/Stock/Stock";
import Music from "../../Components/Music/Music";
import Store from "../../Components/Store/Store";
import Character from "../../Components/Character/Character";
import Curveball from "../../Components/Curveball.js/Curveball";
import Song from "../../Sound/feelsgood.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MarketPage.css";

export default class MarketPage extends Component {
  static contextType = PersonContext;

  constructor(props) {
    super(props);
    this.state = {
      lose: false,
      shopping: false
    };
  }

  checkIfYadied = () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    if (this.context.day > 5 && rand < this.context.starter.health) {
      this.context.setDeath(
        `you caught the disease with a ${this.context.starter.health}% chance`
      );
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

  handleShop = () => {
    this.setState({ shopping: !this.state.shopping });
  };

  updateLocation = () => {
    this.context.updateLocation("home");
    this.props.history.push("/home");
  };

  render() {
    this.checkIfYadied();
    if (this.state.lose === true) {
      this.setState({ lose: false });
      return <Redirect to="/end" />;
    }
    let disabled;
    if (this.context.renderCurve) {
      disabled = true;
    } else {
      disabled = false;
    }
    const { shopping } = this.state;
    return (
      <section className="marketPage gameSetting">
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        <Character selectCharacter={false} />
        <Stock />
        <button
          id="first"
          className="interactiveButton"
          disabled={disabled}
          onClick={this.updateLocation}
        >
          <FontAwesomeIcon icon="home" />
        </button>
        {this.context.renderCurve && <Curveball />}
        <div className="cart">
          <button
            className="interactiveButton"
            disabled={disabled || this.context.buyOnce}
            onClick={this.handleShop}
          >
            <FontAwesomeIcon icon="shopping-cart" />
          </button>
        </div>
        <div className="store-section">
          {shopping && <Store shopping={this.handleShop}/>}
        </div>
        <Music song={Song} />
      </section>
    );
  }
}
