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
    let hands_class = this.state.wash ? 'hand rotateRight' : 'hand rotateLeft';
    return(
      <>
      <div className='hands'>
        <div className={hands_class}></div>
        <div className={hands_class}></div>
      </div>
      <button onClick={this.wash}>Wash</button>
      </>
    )
  }
}