import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PetActivities extends Component {
    static contextType = PersonContext;

    state = {
      activites: 0,
      disabled: false,
    }

    handleExercise = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-10)
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handlePicnic = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-10)
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleTreat = () => {
      this.context.addToHealth(10)
      this.context.addToBoredom(-10)
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleCamera = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleFetch = () => {
      this.context.addToBoredom(-10)
      this.context.incrementActivity()
      this.setState({activites: this.state.activites +1})
      if(this.state.activites === 2) {
        this.renderSleep()
      }
    }

    handleGroom = () => {
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

    render() {
      const { disabled } = this.state
        return <div className="activity-bar">
            <h1>Activities:</h1>
            <button className="mybutton" disabled={disabled} onClick={this.handleFetch}><FontAwesomeIcon icon='dog'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleTreat}><FontAwesomeIcon icon='bone'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleGroom}><FontAwesomeIcon icon='brush'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleExercise}><FontAwesomeIcon icon='running'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handleCamera}><FontAwesomeIcon icon='camera'/></button>
            <button className="mybutton" disabled={disabled} onClick={this.handlePicnic}><FontAwesomeIcon icon='bread-slice'/></button>
        </div>
      }
}
