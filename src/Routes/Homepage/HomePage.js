import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import LandingPage from "../LandingPage/LandingPage";
import StartPage from "../StartPage/StartPage";
//import './HomePage.css'

const person = {
  health: 100,
  boredom: 100,
  toilet: 5,
  food: 5
};

export default class HomePage extends Component {
  static contextType = PersonContext;

  render() {
    return (
      <div className="homePage">
        {this.context.start && <LandingPage />}
        {this.context.userPage && <StartPage />}
        {this.context.game ? (
          <section className="gamePage">
            <p>THIS IS THE GAME PAGE</p>
          </section>
        ) : null}
      </div>
    );
  }
}
