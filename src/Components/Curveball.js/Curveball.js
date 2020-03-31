import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import gameService from "../../services/gameService";
import "./Curveball.css";

export default class Curveball extends Component {
  static contextType = PersonContext;

  state = {
    curveball: {},
    render: true
  };

  componentDidMount() {
    gameService
      .getCurveBall(this.context.location)
      .then(info => {
        this.setState({
          curveball: info
        });
      })
      .catch(this.context.setError);
  }

  accept = () => {
    const { health, boredom, toiletpaper, food } = this.state.curveball.yes;
    const newData = {
      health: this.context.starter.health + health,
      boredom: this.context.starter.boredom + boredom,
      toiletpaper: this.context.starter.toiletpaper + toiletpaper,
      food: this.context.starter.food + food
    };
    this.context.setPersonInfo(newData);
    this.setState({
      render: false
    });
    this.context.updateRenderCurve(false);
    if (this.context.location === "market") {
      this.context.updateCurve(true);
    } else {
      this.context.updateCurve(false);
    }
  };

  reject = () => {
    const { health, boredom, toiletpaper, food } = this.state.curveball.no;
    const newData = {
      health: this.context.starter.health + health,
      boredom: this.context.starter.boredom + boredom,
      toiletpaper: this.context.starter.toiletpaper + toiletpaper,
      food: this.context.starter.food + food
    };
    this.context.setPersonInfo(newData);
    this.setState({
      render: false
    });
    this.context.updateRenderCurve(false);
    if (this.context.location === "market") {
      this.context.updateCurve(true);
    } else {
      this.context.updateCurve(false);
    }
  };

  render() {
    return this.state.render ? (
      <section className="curveball middle">
        <h2>{this.state.curveball.question}</h2>
        <div className="curveballButtons">
          <button onClick={this.accept}>YES</button>
          <button onClick={this.reject}>NO</button>
        </div>
      </section>
    ) : null;
  }
}
