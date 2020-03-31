import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import StatusBar from '../../Components/StatusBar/StatusBar';
import Day from '../../Components/Day/Day';
import Stock from '../../Components/Stock/Stock'
import Curveball from "../../Components/Curveball.js/Curveball";

export default class ParkPage extends Component {
  static contextType = PersonContext;

  updateLocation = () => {
    this.context.updateLocation('home')
  }

  render() {
    let disabled
    if(this.context.renderCurve){
      disabled = true
    }
    else{
      disabled = false
    }
    return (
      <section className="parkpage">
        <StatusBar />
        <Day />
        <Stock />
        <Link to="/">
          <button disabled={disabled} onClick={this.updateLocation}>Home</button>
        </Link>
        {/*this.context.renderCurve && <Curveball />*/}

        <h2>PARK</h2>
      </section>
    )
  }
}
  

