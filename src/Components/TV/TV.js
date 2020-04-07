import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './TV.css'

export default class Pet extends Component {
  static contextType = PersonContext;

  close = () => {
    this.context.turnTV(false)
    this.context.updateFeedback(true)
  }
  
  render(){
  return ( 
    <> 
    <div className="TV">
    <div className="TV-container">
      </div>
      </div>
    <button onClick={this.close} class="tv-button">done</button>
    </>
    )
  }
}