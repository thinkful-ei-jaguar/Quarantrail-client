import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./FirstDay.css";

export default class FirstDay extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
      food: 3,
      Toilet: 3,
      tooMuch: true
    };
  }
  handleChangeFood = event => {
    this.setState({
      food: event.target.value
    });
  };
  handleChangeToilet = event => {
    this.setState({
      Toilet: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.context.addToFoodandToilet(this.state.food, this.state.Toilet);
    this.checkifTomuch();
  };
  handleSubmitforTooMuch = e => {
    e.preventDefault();
    this.context.addToFoodandToilet(-6, -6);
    this.context.incrementDay();
  };

  checkifTomuch = () => {
    if (this.state.food >= 5 || this.state.Toilet >= 5) {
      this.setState({
        tooMuch: false
      });
    } else {
      this.context.incrementDay();
    }
  };

  checkifTomuch = () => {
    if (this.state.food >= 5 || this.state.Toilet >= 5) {
      this.setState({
        tooMuch: false
      });
    } else {
      this.context.incrementDay();
    }
  };

  Toomuch = () => {
    return (
      <div className="middle">
        <div classNameName="box">
          <h1>You have too much</h1>
          <p>
            You have too much and you're neighbors decided to rob you so bye-bye
            good luck
          </p>
          <button
            className="popupButton"
            onClick={e => this.handleSubmitforTooMuch(e)}
          >
            wow
          </button>
        </div>
      </div>
    );
  };

  originalbox = () => {
    return (
      <div className="middle">
        <div className="box">
          <h1>Select amount to start with:</h1>
          <h2>Food: {this.state.food}</h2>
          <div className="slidecontainer">
            <input
              onChange={this.handleChangeFood}
              value={this.state.food}
              type="range"
              min="0"
              max="6"
              className="slider"
              id="myRange"
            />
          </div>
          <h2>Toilet paper: {this.state.Toilet}</h2>
          <div className="slidecontainer">
            <input
              onChange={this.handleChangeToilet}
              value={this.state.Toilet}
              type="range"
              min="0"
              max="6"
              className="slider"
              id="myRange"
            />
          </div>
          <button className="popupButton" onClick={e => this.handleSubmit(e)}>
            Submit
          </button>
        </div>
      </div>
    );
  };

  render() {
    return <>{this.state.tooMuch ? this.originalbox() : this.Toomuch()}</>;
  }
}
