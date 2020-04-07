import React, { Component } from "react";
import './Runner.css'
 
export default class Runner extends Component {
  
  playerBox = () => {
    return <div className='player'></div>
  }

  enemyBox = () => {
    return <div className='enemy'></div>
  }

  renderEnemies = () => {
    let enemy = new this.enemy()
  }

  movement = event => {
    switch (event.key) {
      case 'ArrowLeft':
          console.log('left')
          break;
      case 'ArrowUp':
          console.log('up')
          break;
      case 'ArrowRight':
          console.log('right')
          break;
      case 'ArrowDown':
          console.log('down')
          break;
      default: break;
    }
  }

  render() {
    return (
      <section className='runner'>
        <div className='player' onKeyDown={e => this.movement(e)} tabIndex="0" ></div>
      </section>
    );
  }
}

function enemy() {
  this.newPos = function() {
    this.x += 3;
    this.y -= 3;
  }
}