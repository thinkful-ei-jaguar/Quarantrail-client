import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './StatusBar.css'

export default class StatusBar extends Component{
  static contextType = PersonContext;
  render(){
    const remCorona = 100 - this.context.starter.health;
    const remBoredom = 100 -this.context.starter.boredom;
    return (
      <section className='StatusBar'>
        <div className='bar'>
          <div id='corona' style={{'width': this.context.starter.health+'%'}}><p>{this.context.starter.health}%</p></div>
          <div className='remaining' style={{'width': remCorona+'%'}}></div>
        </div>
        <div className='bar'>
          <div id='boredom' style={{'width': this.context.starter.boredom+'%'}}><p>{this.context.starter.boredom}%</p></div>
          <div className='remaining' style={{'width': remBoredom+'%'}}></div>
        </div>
      </section>
    )
  }
}
