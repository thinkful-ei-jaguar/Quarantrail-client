import React, { Component } from "react";
import { Link } from "react-router-dom";
import WashGame from '../../Components/WashGame/WashGame'
import PersonContext from "../../Context/PersonContext";
import './minigame.css'

export default class BestGameEver extends Component {

  staticContext = PersonContext

  state = {
    ready: false,
    done: false,
    count: 0
  }

  move = () => {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
    setTimeout(()=>this.setState({done:true}), 20250)
  }

  ready = () => {
    this.setState({ready:true})
    this.move()
  }

  doneScreen = () => {
    let disabled;
    if (this.context.renderCurve) {
      disabled = true;
    } else {
      disabled = false;
    }
    const { count } = this.state
    let phrase;
    if (count>=90){
      phrase = 'Great Job your hands are super clean!'
    }
    else if (count>=80){
      phrase = 'Pretty Good!'
    }
    else if (count>=70){
      phrase = 'Not bad, but scrub more next time.'
    }
    else if (count>=60){
      phrase = 'Could do better...'
    }
    else if (count<60){
      phrase = 'Dirty af.'
    }
    return (
      <div className='minigame-end-screen'>
        <div className='display-box'>
          <h2>All CLean!</h2>
            <p>you got a score of {count}</p><br/>
            <p>{phrase}</p>
            <Link to={{
              pathname: '/',
              state: {
                washHands: true
              }
            }}>
            <button disabled={disabled} onClick={this.updateLocation}>
              Done
            </button>
          </Link>
        </div>
      </div>
    )
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    const { ready, done } = this.state
    return (
      <section className='mini-game-section'>
      <div className='mini-game-timer-container'>
        <div id='myBar' className='mini-game-timer-filler'></div>
      </div>
      {!ready && <button className='ready-button' onClick={this.ready}>Ready</button>}
      {ready && <WashGame changeCount={this.changeCount}/>}
      {done && this.doneScreen()}
      </section>
    )
  }
}