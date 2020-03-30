import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import Controller from '../../Images/Game-Icon.svg'
import Smartphone from '../../Images/Smartphone.svg'
import Friends from '../../Images/friends.svg'
import Sleep from '../../Images/sleep.png'
import './Activities.css'

export default class Activities extends Component {
    static contextType = PersonContext;

    state = {
      activites: 0,
      disabled: false,
    }

    handleVideoGame = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
    }

    handlePhone = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
    }

    handleFriends = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-20)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
    }

    renderSleep = () => {
      this.setState({activites:0, disabled:true})
    }

    handleNextDay = () => {
      this.setState({disabled:false})
      if(this.context.curveball === false) {
        this.context.updateRenderCurve(true)
      }
      this.context.incrementDay()
      this.context.updateCurve(false)
      // this.context.addToFood(-1)
      // this.context.addToToilet(-0.5)
      this.context.dailyTakeAwayFoodandToilet(1,0.5)
      this.context.addToBoredom(20)
    }

    render() {
      const { activites, disabled } = this.state
      if(activites === 3) {
        this.renderSleep()
      }
        return <div className="activity-bar">
            <h1>Activities:</h1>
            <button className="mybutton" disabled={disabled} onClick={this.handleVideoGame}><img src={Controller} alt='controller icon' /></button>
            <button className="mybutton" disabled={disabled} onClick={this.handlePhone}><img src={Smartphone} alt='phone icon' /></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleFriends}><img src={Friends} alt='friend icon' /></button>
            <button className="mybutton" disabled={!disabled} onClick={this.handleNextDay}><img src={Sleep} alt='sleep icon' /></button>
        </div>
      }
}
