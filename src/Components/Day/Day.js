import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './Day.css'

export default class Day extends Component{
  static contextType = PersonContext;

  render(){
    return (
        <section className="Day">
          <h2>Day </h2> 
          {this.context.day}
        </section>
      )
  }
}
