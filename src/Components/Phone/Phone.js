import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import reddit from '../../Images/reddit.jpg'
import './Phone.css'

export default class Phone extends Component {
  static contextType = PersonContext;

  close = () => {
    this.context.updatePhone(false)
  }

  render() {
    return (
      <section className='phone'>
        <button className='phonebutt' onClick={this.close}> X </button>
        <img src={reddit} alt="screenshot of reddit post"></img>
      </section>
    )
  }
}