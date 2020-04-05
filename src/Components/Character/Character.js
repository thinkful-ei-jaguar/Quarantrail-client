import React, { Component } from "react";
import femaleChar from "../../Images/FemaleChar.svg";
import PersonContext from "../../Context/PersonContext";
import "./Character.css";
// import styled, { keyframes } from 'styled-components';
// import { bounce } from 'react-animations';

// const bounceAnimation = keyframes`${bounce}`;

// const BouncyDiv = styled.div`
//   animation: 3s ${bounceAnimation};
// `;

export default class Character extends Component {
  static contextType = PersonContext;

  state = {
    character: ""
  };

  selectFemale = event => {
    this.context.setCharacter(event.target);
    this.setState({ character: "female" });
  };

  selectMale = event => {
    this.context.setCharacter(event.target);
    this.setState({ character: "male" });
  };

  render() {
    let className = "char";

    return (
      <div className="character">
        <h1>Select your player</h1>

        <ul>
          <li
            onClick={this.selectFemale}
            className={`char ${this.state.character === "female" &&
              "chosenChar"}`}
          >
            <img src={femaleChar} alt="female character" />
          </li>
          <li
            onClick={this.selectMale}
            className={`char ${this.state.character === "male" &&
              "chosenChar"}`}
          >
            <img src={femaleChar} alt="male character" />
          </li>
        </ul>
      </div>
    );
  }
}
