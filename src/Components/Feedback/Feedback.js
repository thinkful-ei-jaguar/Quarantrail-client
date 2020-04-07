import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './Feedback.css'

export default class Feedback extends Component {
  static contextType = PersonContext;

  state = {
    render: true,
    infection: this.context.increaseRate.infection,
    boredom: this.context.increaseRate.boredom,
  };

  close = () => {
    this.setState({render: false})
    this.context.updateFeedback(false)
  }

  render() {
    const { render, infection, boredom } = this.state
    return {render} ? (
      <section className="feedback">
        <button className='feedbackButt' onClick={this.close}>X</button>
        <p>You have increased your infection rate by {infection}% </p>
        <p>You have increased your boredom rate by {boredom}% </p>
      </section>
    ) : null;
  }
}
