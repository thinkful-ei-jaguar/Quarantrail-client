import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./Store.css";

export default class Store extends Component {
  static contextType = PersonContext;

  state = {
    foodCounter: 0,
    toiletPaperCounter: 0,
    foodLimit: 6,
    toiletLimit: 6,
    tooMuch: false
  };

  handlePlusFood = () => {
    if (this.state.foodCounter + this.context.starter.food === 6) {
      return;
    }
    this.setState({ foodCounter: this.state.foodCounter + 1 });
  };

  handleMinusFood = () => {
    if (this.state.foodCounter === 0) {
      return;
    }
    this.setState({ foodCounter: this.state.foodCounter - 1 });
  };

  handlePlusTp = () => {
    if (
      this.state.toiletPaperCounter + this.context.starter.toiletpaper ===
      6
    ) {
      return;
    }
    this.setState({ toiletPaperCounter: this.state.toiletPaperCounter + 0.5 });
  };

  handleMinusTp = () => {
    if (this.state.toiletPaperCounter === 0) {
      return;
    }
    this.setState({ toiletPaperCounter: this.state.toiletPaperCounter - 0.5 });
  };

  handleCheckout = () => {
    const { foodCounter, toiletPaperCounter } = this.state;
    const { food, toiletpaper } = this.context.starter;
    if (foodCounter + food >= 6) {
      this.setState({ tooMuch: true });
    }
    if (toiletPaperCounter + toiletpaper >= 6) {
      this.setState({ tooMuch: true });
    }
    this.context.addToFoodandToilet(foodCounter, toiletPaperCounter);
    this.setState({
      foodCounter: 0,
      toiletPaperCounter: 0
    });
  };

  tooMuch = () => {
    return (
      <div class="middle">
        <div className="box">
          <h1>You have too much</h1>
          <p>
            You have too much and the other shoppers decided to take out of your
            cart so bye-bye good luck
          </p>
          <button onClick={e => this.handleSubmitforTooMuch(e)}>wow</button>
        </div>
      </div>
    );
  };

  handleSubmitforTooMuch = e => {
    e.preventDefault();
    this.context.addToFoodandToilet(-4, -4);
    this.setState({ tooMuch: false });
  };

  original = () => {
    const { foodCounter, toiletPaperCounter } = this.state;
    return (
      <div className="store">
        <p>
          Welcome to Trader Jone's! As you see were a little bare right now due
          to the crisis, but hey all business is good business right? Look
          around and let me know if you'd like any food or toilet paper.
        </p>
        <div className="store-food">
          <p>Food</p>
          {foodCounter}
          <button onClick={this.handlePlusFood}>+</button>
          <button onClick={this.handleMinusFood}>-</button>
        </div>
        <div className="store-toilet-paper">
          <p>Toilet Paper</p>
          {toiletPaperCounter}
          <button onClick={this.handlePlusTp}>+</button>
          <button onClick={this.handleMinusTp}>-</button>
        </div>
        <button className="checkout-button" onClick={this.handleCheckout}>
          Buy
        </button>
      </div>
    );
  };

  render() {
    return <>{this.state.tooMuch ? this.tooMuch() : this.original()}</>;
  }
}
