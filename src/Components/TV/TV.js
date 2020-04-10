import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import SimpleGame from "../SimpleGame/SimpleGame"
import './TV.css'

export default class Pet extends Component {
  static contextType = PersonContext;

  close = () => {
    this.context.turnTV(false)
    this.context.updateFeedback(true)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions=()=> {
    this.setState({ width: this.inner.clientHeight, height: this.inner.clientWidth});
  }
  render(){
    console.log(this.state)
    return ( 
      <div className='tv-background'> 
      <div className="TV">
      <div className="TV-container">
        </div>
        </div>
      <button onClick={this.close} class="tv-button">done</button>
      </div>
      )
    }
}
//<div className="TV-container"></div>