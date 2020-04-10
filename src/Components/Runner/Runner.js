import React, { Component } from "react";
import Player from './Player'
import Enemy from './Enemy'
import "./Runner.css";
export default class Runner extends Component {

  state = {
    direction: "right",
    size: {
      player: 50,
      maxDim: 650
    },
    positions: {
      player: {
        top: Math.floor(13 / 2) * 50,
        left: Math.floor(28 / 2) * 50
      },
      enemies: []
    },
    playerScore: 0,
    timeElapsed: 0,
    enemySpeed: 10,
    enemyIndex: 0,
    activeEnemies: 2,
    baseScore: 10
  };

  componentDidMount() {
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50);
    this.timeInterval = setInterval(this.updateGame, 1000);
    this.gameInterval = setInterval(this.updateEnemiesInPlay, 250);
    document.onkeydown = this.onKeyDown;
  }

  placeEnemy = () => {
    // enemies always launch at player
    const { player, maxDim } = this.state.size;
    const { player: playerPos } = this.state.positions;

    // assign to a random side
    const rand = Math.floor(Math.random() * 4) + 1
    let side
    switch (rand) {
      case 1:
        side = 'UP'
        break;
      case 2:
        side = 'DOWN'
        break;
      case 3:
        side = 'LEFT'
        break;
      case 4:
        side = 'RIGHT'
        break;

      default:
        break;
    }

    // generate enemy object
    const newEnemy = this.generateNewEnemy(playerPos, side);

    // add new enemy to state
    this.setState({
        positions: {
            ...this.state.positions,
            enemies: [...this.state.positions.enemies].concat(newEnemy)
        }
    });
  }

  generateNewEnemy = (position, side) => {
    this.setState({
        enemyIndex: this.state.enemyIndex + 1
    });

    const newEnemy = { key: this.state.enemyIndex, dir: side };
    const { maxDim, player } = this.state.size;

    switch(side) {
      case 'UP':
        newEnemy.top = maxDim;
        newEnemy.left = position.left;
        break;
      case 'DOWN':
        newEnemy.top = 0 - player;
        newEnemy.left = position.left;
        break; 
      case 'LEFT':
        newEnemy.top = position.top;
        newEnemy.left = maxDim;
        break;
      case 'RIGHT':
        newEnemy.top = position.top;
        newEnemy.left = 0 - player;
        break;
      default: 
        break;
    }
    return newEnemy;
  }

  handlePlayerMovement = (dirObj) => {
    const { top, left } = this.state.positions.player;
    const { player, maxDim } = this.state.size;
    
    // check walls
    switch (dirObj.dir) {
      case 'UP':
        if (top === 0) return;
        break;
      case 'DOWN':
        if (top === maxDim - player) return;
        break;
      case 'LEFT':
        if (left === 0) return;
        break;
      case 'RIGHT':
        if (left === maxDim - player) return;
        break;
      default:
        break;
    }
    
    this.setState({
        positions: {
            ...this.state.positions,
            player: {
                top: top + (player * dirObj.top),
                left: left + (player * dirObj.left)
            }
        }
    });
  }

  handlePlayerCollision = () => {
    // clear intervals
    clearInterval(this.gameInterval); 
    clearInterval(this.enemyInterval);
    clearInterval(this.timeInterval);

    //reset state
    this.setState({    
      positions: {
        player: {
          top: Math.floor(13 / 2) * 50,
          left: Math.floor(28 / 2) * 50
        },
        enemies: []
      },
      playerScore: 0,
      timeElapsed: 0,
      enemySpeed: 10,
      enemyIndex: 0,
    })

    // restart game
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50);
    this.timeInterval = setInterval(this.updateGame, 1000);
    this.gameInterval = setInterval(this.updateEnemiesInPlay, 250);
  }

  updateGame = () => {
    const { timeElapsed } = this.state;

    this.updateTimeAndScore();

    if (timeElapsed > 0) {

        // increment enemy speed
        if (timeElapsed % 3 === 0) {
            this.incrementEnemySpeed();
        }
    }
  }

  updateEnemyPositions = () => {
    const { enemySpeed, positions: { enemies }, size: { player, maxDim }} = this.state;

    this.setState({
      positions: {
        ...this.state.positions,
        enemies: enemies.filter(enemy => !enemy.remove).map(enemy => {
          if (enemy.top < (0 - player) || 
            enemy.top > maxDim + player || 
            enemy.left < (0 - player) || 
            enemy.left > maxDim + player) {
            enemy.remove = true;
            return enemy;
          }
        // based on direction, increment the correct value (top / left)
          switch(enemy.dir) {
            case 'UP': 
              enemy.top -= enemySpeed;
              break;
            case 'DOWN': 
              enemy.top += enemySpeed;
              break;
            case 'LEFT':
              enemy.left -= enemySpeed;
              break;
            case 'RIGHT':
              enemy.left += enemySpeed;
              break;
            default:
              break;
          }
          return enemy;
          })
        }
    });
  }

  updateEnemiesInPlay = () => {
    const { activeEnemies } = this.state;
    const { enemies } = this.state.positions;

    if (enemies.length < activeEnemies) {
      this.placeEnemy();
    }
  }

  updateTimeAndScore = () => {
    const { timeElapsed, playerScore, baseScore } = this.state;

    this.setState({
        timeElapsed: timeElapsed + 1,
        playerScore: playerScore + baseScore,
    });
  }

  incrementEnemySpeed = () => {
    const { enemySpeed } = this.state;
    this.setState({
        enemySpeed: parseFloat((enemySpeed + 0.25).toFixed(2))
    });
  }

  render() {
    const { 
      size: { player }, 
      positions: { player: playerPos },
      playerScore
    } = this.state;
    return (
      <section className="runner">
        <h1>Score {playerScore}</h1>
        <p>use the arrow keys to move</p>
        <Player 
          size={player} 
          position={playerPos}
          handlePlayerMovement={this.handlePlayerMovement} />

        {
          this.state.positions.enemies.map(enemy => 
            <Enemy key={enemy.key}
              size={player}
              info={enemy}
              playerPosition={playerPos}
              onCollide={this.handlePlayerCollision} />
          )
        }
      </section>
    );
  }
}

