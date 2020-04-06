import React, { Component } from "react";
import MaleChar from "../../Images/MaleChar.svg";
import "./CharacterMale.css";
// import styled, { keyframes } from 'styled-components';
// import { bounce } from 'react-animations';

// const bounceAnimation = keyframes`${bounce}`;

// const BouncyDiv = styled.div`
//   animation: 3s ${bounceAnimation};
// `;

export default class CharacterMale extends Component {
  render(){
  let className = 'character';
  if (this.props.active) {
    className += ' character-active';
  }
  
  return (  
    <div className={className}>
      <img src={MaleChar} alt="character" />
    </div>
    )
  }
}


