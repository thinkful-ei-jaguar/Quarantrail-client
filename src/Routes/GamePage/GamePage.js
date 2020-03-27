import React, { Component } from "react";
import { Link } from "react-router-dom";
import Stock from "../../Components/Stock/Stock";
import Activities from "../../Components/Activities/Activities";
import PersonContext from "../../Context/PersonContext";
import "./GamePage.css";
import StatusBar from "../../Components/StatusBar/StatusBar";
import FirstDay from "../../Components/FirstDay/FirstDay"
import Day from "../../Components/Day/Day";
import gameService from '../../services/gameService'
import Curveball from "../../Components/Curveball.js/Curveball";



export default class GamePage extends Component {
  static contextType = PersonContext;
  componentDidMount(){
    if(this.context.day===0){
      gameService.getGameinfo()
      .then(info=>{
          this.context.setPersonInfo(info);
          console.log(this.context)
      }) 
      .catch(this.context.setError)
    }
  }

  updateLocation = () => {
    this.context.updateLocation('market')
    if(this.context.curveball === false) {
      const rand = Math.random()
      if(rand < 0.5) {
        this.context.updateRenderCurve(true)
      }
    }
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
      <section className="gamePage">
        {/*this.context.day===0?<FirstDay/>:<></>*/}
        <StatusBar/>
        <Day/>
        <Stock />
        <Activities />
        <Link to="/market">
          <button disabled={disabled} onClick={this.updateLocation}>Market</button>
        </Link>
        {this.context.renderCurve && <Curveball />}
      </section>
    );
  }
}
