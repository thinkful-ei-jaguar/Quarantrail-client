import React, { Component } from "react";
import rockcat from "../../Images/rockcat.svg";
import './Pet.css'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;


export default class Pet extends Component {
  render(){
      console.log("ok");
  return (  
    
    <div className="pet">
      <BouncyDiv>
      <img src={rockcat} alt="pet" />
      </BouncyDiv>
    </div>

    )
  }
}


