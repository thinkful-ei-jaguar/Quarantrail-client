import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Activities.css'

export default class Activities extends Component {
    static contextType = PersonContext;

    state = {
      activites: 0,
      disabled: false,
      washHands: false
    }

    handleWashHands = () => {
      this.context.addToHealth(-5)
      this.setState({washHands: true, activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleTakeout = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-10)
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleVideoGame = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handlePhone = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleFriends = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-20)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    renderSleep = () => {
      this.setState({activites:0, disabled:true})
    }

    handleNextDay = () => {
      this.setState({disabled:false})
      if(this.context.curveball === false) {
        this.context.updateRenderCurve(true)
      }
      this.context.incrementDay();
      this.context.updateCurve(false);
      let newData={
        id: this.context.starter.id,
        health:this.context.starter.health,
        boredom:this.context.starter.boredom+20,
        toiletpaper:this.context.starter.toiletpaper-0.5,
        food:this.context.starter.food -1
      }
      this.context.setPersonInfo(newData);
      this.setState({washHands: false});
    }

    render() {
      const { disabled,washHands } = this.state
        return <div className="activity-bar">
            <h1>Activities:</h1>
            <button className="mybutton" disabled={disabled} onClick={this.handleVideoGame}><FontAwesomeIcon icon='gamepad'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handlePhone}><FontAwesomeIcon icon='mobile-alt'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleFriends}><FontAwesomeIcon icon='users'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleTakeout}><FontAwesomeIcon icon='utensils'/></button>
            <button className="mybutton" disabled={washHands || disabled} onClick={this.handleWashHands}><FontAwesomeIcon icon='soap'/></button>
            <button className="mybutton" disabled={!disabled} onClick={this.handleNextDay}><FontAwesomeIcon icon='bed'/></button>
        </div>
      }
}
