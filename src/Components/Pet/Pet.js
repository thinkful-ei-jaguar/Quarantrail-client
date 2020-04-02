import React, { Component } from "react";
import rockcat from "../../Images/rockcat.svg";
import './Pet.css'

export default class Pet extends Component {
  render(){
      console.log("ok");
  return (  
    <div className="pet">
      <img src={rockcat} alt="pet" />
    </div>
    )
  }
}


