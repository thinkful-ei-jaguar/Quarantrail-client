import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import gameService from "../../services/gameService";
import reddit from '../../Images/reddit.jpg'
import './Phone.css'

export default class Phone extends Component {
  static contextType = PersonContext;

  state = {
    img: {}
  }

  componentDidMount() {
    gameService
      .getMeme()
      .then(meme => {
        this.setState({img: meme})
      })
      .catch(this.context.setError);
  }

  close = () => {
    this.context.updatePhone(false)
    this.context.updateFeedback(true)
  }

  render() {
    return (
      <section className='phone'>
        <button className='phonebutt' onClick={this.close}> X </button>
        <img src={this.state.img} alt="one of many memes"></img>
      </section>
    )
  }
}