import React, { Component } from 'react';
import './WashGame.css'

export default class WashGame extends Component {
  state = {
    // count: 0,
    wash: false
  }

  wash = () => {
    this.setState({wash:!this.state.wash })
    this.props.changeCount()
  }

  render() {
    let hands_class = this.state.wash ? 'rotateRight' : 'rotateLeft';
    return(
      <>
      <div className='hands'>
        <div className={hands_class} id='left-hand'></div>
        <div className={hands_class} id='right-hand'></div>
      </div>
      <button className='wash-button' onClick={this.wash}>Wash</button>
      </>
    )
  }
}