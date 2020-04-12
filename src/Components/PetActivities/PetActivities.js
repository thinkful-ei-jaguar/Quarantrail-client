import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PetActivities.css";
//import { tsImportEqualsDeclaration } from "@babel/types";

export default class PetActivities extends Component {
  static contextType = PersonContext;

  state = {
    disabled: false,
    viewActivities: false,
    previousAct: "",
    previousCount: 0
  };

  componentDidMount = () => {
    if (this.context.dailyActivities === -1) {
      this.renderSleep();
    }
  };

  performActivity = (name, health, boredom) => {
    this.setState({ activites: this.state.activites + 1 });
    if (this.state.previousAct === name) {
      this.setState({
        previousCount: this.state.previousCount + 1
      });

      if (this.state.previousCount === 0) {
        this.context.addToBoredom(boredom * 0.8);
        this.context.setIncrease({ infection: health, boredom: boredom * 0.8 });
      }

      if (this.state.previousCount === 1) {
        this.context.addToBoredom(boredom * 0.6);
        this.context.setIncrease({ infection: health, boredom: boredom * 0.6 });
      }
    } else {
      this.setState({
        previousAct: name,
        previousCount: 0
      });
      this.context.addToBoredom(boredom);
      this.context.setIncrease({ infection: health, boredom: boredom });
    }
    this.context.addToHealth(health);
    this.context.incrementActivity();
    if (this.context.dailyActivities === 0) {
      this.renderSleep();
    }
  };

  handleClickViewActivities = () => {
    this.setState({ viewActivities: !this.state.viewActivities });
  };

  handleRunning = () => {
    this.props.history.push("/runner");
  };

  handleTreat = () => {
    this.performActivity("treat", 10, -10);
    this.context.updateFeedback(true);
    this.context.setFeedTreat(true);
    this.props.history.push("/feedTreats");
  };

  handleFetch = () => {
    this.performActivity("fetch", 0, -10);
    this.context.updateFeedback(true);
  };

  handleChat = () => {
    this.performActivity("chat", 50, -15);
    this.context.updateFeedback(true);
  };

  handleRowing = () => {
    this.performActivity("rowing", 20, -15);
    this.context.updateFeedback(true);
  };

  renderSleep = () => {
    this.setState({ disabled: true });
  };

  render() {
    const { disabled, viewActivities } = this.state;
    return (
      <div className="activityBar">
        <button
          className="interactiveButton"
          onClick={this.handleClickViewActivities}
        >
          <FontAwesomeIcon icon="icons" />
        </button>
        {viewActivities && (
          <div>
            <p className="header">
              Activities left: {this.context.dailyActivities + 1}
            </p>

            <button
              className="mybutton"
              disabled={disabled}
              onClick={this.handleRunning}
            >
              <FontAwesomeIcon icon="running" />
            </button>

            <button
              className="mybutton"
              disabled={this.context.feedTreat || disabled}
              onClick={this.handleTreat}
            >
              <FontAwesomeIcon icon="bone" />
            </button>

            <button
              className="mybutton"
              disabled={disabled}
              onClick={this.handleChat}
            >
              <FontAwesomeIcon icon="comment" />
            </button>

            <button
              className="mybutton"
              disabled={disabled}
              onClick={this.handleRowing}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="row"
                  d="M19.2252 35.2L7 47L11.0405 50.9L20.4685 41.8H25.8559L19.2252 35.2ZM36.7342 0C33.7297 0 31.3468 2.3 31.3468 5.2C31.3468 8.1 33.7297 10.4 36.7342 10.4C39.7387 10.4 42.1216 8.1 42.1216 5.2C42.1216 2.3 39.7387 0 36.7342 0ZM53 52.2L44.8153 60L36.7342 52.1V48.2L17.5676 29.8C16.7387 29.9 15.9099 30 15.0811 30V24.4C19.6396 24.4 24.9234 22 27.7207 19L31.5541 15C32.0721 14.5 32.6937 14 33.4189 13.7C34.2478 13.3 35.0766 13.1 36.009 13.1H36.1126C39.4279 13.1 42.2252 15.8 42.2252 19V34C42.2252 36.2 41.2928 38.2 39.7387 39.6L30 30.2V24.3C28.3423 25.7 26.1667 27 23.7838 27.9L40.7748 44.3H44.8153L53 52.2Z"
                  fill="#333333"
                />
              </svg>
            </button>
            <button
              className="mybutton"
              disabled={disabled}
              onClick={this.handleFetch}
            >
              <FontAwesomeIcon icon="baseball-ball" />
            </button>
          </div>
        )}
      </div>
    );
  }
}
