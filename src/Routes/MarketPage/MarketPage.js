import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import TraderLogo from "../../Images/Trader Jone's.svg";


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
