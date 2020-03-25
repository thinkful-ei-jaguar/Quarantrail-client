import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import TraderLogo from "../../Images/Trader Jone's.svg";

const person = {
  health: 100,
  boredom: 100,
  toilet: 5,
  food: 5
};

export default class MarketPage extends Component {
  static contextType = PersonContext;

  render() {
    return (
      <div className="marketpage">
        <img src={TraderLogo} alt="trader jone's" />
      </div>
    );
  }
}
