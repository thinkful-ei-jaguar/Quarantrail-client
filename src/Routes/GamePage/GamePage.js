import React, { Component } from "react";
import { Link } from "react-router-dom";
import Stock from "../../Components/Stock/Stock";
import Activities from "../../Components/Activities/Activities";
import PersonContext from "../../Context/PersonContext";
import "./GamePage.css";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";

export default class GamePage extends Component {
  person = {
    health: 80,
    boredom: 20,
    toilet: 5,
    food: 5,
    day: 15
  };

  static contextType = PersonContext;

  render() {
    return (
      <section className="gamePage">
        <StatusBar person={this.person} />
        <Day person={this.person} />
        <Stock />
        <Activities />
        <Link to="/market">
          <button>Market</button>
        </Link>
      </section>
    );
  }
}
