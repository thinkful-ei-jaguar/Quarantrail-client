import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import TraderLogo from "../../Images/Trader_jones.svg";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Day from "../../Components/Day/Day";
import Stock from "../../Components/Stock/Stock";
import Store from "../../Components/Store/Store";
import Curveball from "../../Components/Curveball.js/Curveball";
import Character from "../../Components/Character/Character";
import "./MarketPage.css";

export default class MarketPage extends Component {
  static contextType = PersonContext;

  state = {
    shopping: false
  };

  handleShop = () => {
    this.setState({ shopping: !this.state.shopping });
  };

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
    const { shopping } = this.state;
    return (
      <section className="marketPage gameSetting">
        <img src={TraderLogo} alt="trader jone's" />
        <div className="top">
          <StatusBar />
          <Day />
        </div>
        <Character />
        <Stock />
        <div className="map">
          <Link to="/">
            <button disabled={disabled} onClick={this.updateLocation}>
              Home
            </button>
          </Link>
        </div>
        {this.context.renderCurve && <Curveball />}
        <button
          className="shop-button"
          disabled={disabled}
          onClick={this.handleShop}
        >
          Shop
        </button>
        <div className="store-section">{shopping && <Store />}</div>
      </section>
    );
  }
}
