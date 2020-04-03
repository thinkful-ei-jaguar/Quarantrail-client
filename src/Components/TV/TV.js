import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './TV.css'

export default class Pet extends Component {
  static contextType = PersonContext;
  
  render(){
  return ( 
    <> 
    <div className="TV">
    <div className="TV-container">
      </div>
      </div>
    <button onClick={()=>this.context.turnTV(false)} class="tv-button">done</button>
    </>
    )
  }
}