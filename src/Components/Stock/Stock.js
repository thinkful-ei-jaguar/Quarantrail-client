import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Stock.css";

export default class Stock extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
      showStocks: false
    };
  }

  handleClick = () => {
    console.log(this.state);
    let show = !this.state.showStocks;
    this.setState({
      showStocks: show
    });
  };
  stockFormat() {
    return (
      <div>
        <p className="header">Stocks</p>
        <p className="supplies">Food: {this.context.starter.food}</p>
        <p className="supplies">
          Toilet paper: {this.context.starter.toiletpaper}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="stock">
        <button className="interactiveButton" onClick={this.handleClick}>
          <FontAwesomeIcon icon="box-open" />
        </button>
        {this.state.showStocks ? this.stockFormat() : <></>}
      </div>
    );
  }
}
