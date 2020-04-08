import React, { Component } from "react";
import femaleChar from "../../Images/FemaleChar.svg";
import MaleChar from "../../Images/MaleChar.svg";
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
    this.context.setCharacter("female");
    this.setState({ character: "female" });
  };

  selectMale = event => {
    this.context.setCharacter("male");
    this.setState({ character: "male" });
  };

  selectCharacter = () => {
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
            <img src={MaleChar} alt="male character" />
          </li>
        </ul>
      </div>
    );
  };

  renderCharacter = () => {
    if (this.context.character === "female") {
      return <img id="mainChar" src={femaleChar} alt="female character" />;
    }
    return <img id="mainChar" src={MaleChar} alt="male character" />;
  };

  render() {
    return (
      <div>
        {this.props.selectCharacter && this.selectCharacter()}
        {!this.props.selectCharacter && this.renderCharacter()}
      </div>
    );
  }
}
