import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import Music from "../../Components/Music/Music";
import Song from "../../Sound/feelinghappy.mp3";
import Player from './Player'
import Enemy from './Enemy'
import "./Runner.css";
export default class Runner extends Component {
  static contextType = PersonContext

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
    baseScore: 10,
    renderScore: false,
  };

  componentDidMount() {
    this.enemyInterval = setInterval(this.updateEnemyPositions, 50);
    this.timeInterval = setInterval(this.updateGame, 1000);
    this.gameInterval = setInterval(this.updateEnemiesInPlay, 250);
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
        newEnemy.left = 1385;
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
    
    // check walls
    switch (dirObj.dir) {
      case 'UP':
        if (top === 0) return;
        break;
      case 'DOWN':
        if (top > 625) return;
        break;
      case 'LEFT':
        if (left === 0) return;
        break;
      case 'RIGHT':
        if (left > 1360) return;
        break;
      default:
        break;
    }
    
    this.setState({
        positions: {
            ...this.state.positions,
            player: {
                top: top + (30 * dirObj.top),
                left: left + (30 * dirObj.left)
            }
        }
    });
  }

  handlePlayerCollision = () => {
    // clear intervals
    clearInterval(this.gameInterval); 
    clearInterval(this.enemyInterval);
    clearInterval(this.timeInterval);

    this.resetGame()
  }

  score = () => {
    let phrase;
    const { playerScore } = this.state
    if (playerScore >= 500){
      phrase = 'Perfect! Even better than Usain Bolt'
    }
    else if (playerScore >= 400){
      phrase = 'Pretty Good!'
    }
    else if (playerScore >= 300){
      phrase = 'Not bad, but try harder next time.'
    }
    else if (playerScore >= 100 && playerScore <= 299){
      phrase = 'Could do better...'
    }
    else if (playerScore < 100){
      phrase = 'Did you even run?'
    }

    return(
      <div className='popupScreen runnerEnd'>
        <h2>Good Workout!</h2>
          <p>you got a score of {playerScore}</p>
          <p>{phrase}</p>
          <Link to={{
            pathname: '/park'
          }}>
          <button className='popupButton' onClick={this.updateBoredom}>
            Done
          </button>
        </Link>
      </div>
    )
  }

  updateBoredom = () => {
    this.setState({
      playerScore: 0,
      renderScore: false
    })

    const { playerScore } = this.state
    let score = -1
    if( playerScore >= 500 ) {
      score = -20
    } else if( playerScore >= 400 ) {
      score = -15
    } else if( playerScore >= 300 ) {
      score = -10
    } else if(playerScore >= 100 && playerScore <= 299) {
      score = -5
    }
    this.context.addToHealth(5)
    this.context.addToBoredom(score)
    this.context.setIncrease({infection: 5, boredom: score})
    this.context.incrementActivity();
    this.context.updateFeedback(true)
  }

  resetGame = () => {
    //reset state
    this.setState({    
      positions: {
        player: {
          top: Math.floor(13 / 2) * 50,
          left: Math.floor(28 / 2) * 50
        },
        enemies: []
      },
      timeElapsed: 0,
      enemySpeed: 10,
      enemyIndex: 0,
      activeEnemies: 2,
      renderScore: true
    })
  }

  updateGame = () => {
    const { timeElapsed } = this.state;

    this.updateTimeAndScore();

    if (timeElapsed > 0) {

      // increment enemy speed
      if (timeElapsed % 3 === 0) {
          this.incrementEnemySpeed();
      }

      // increment max active enemies every 10 seconds
      if (timeElapsed % 10 === 0) {
        this.incrementActiveEnemies();
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
            enemy.top > 625 + player || 
            enemy.left < (0 - player) || 
            enemy.left > 1385) {
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

  incrementActiveEnemies = () => {
    this.setState({
        activeEnemies: this.state.activeEnemies + 1
    });
  }

  render() {
    const { 
      size: { player }, 
      positions: { player: playerPos },
      playerScore,
      renderScore
    } = this.state;
    return (
      <section className="runner">

        <div className='gameInfo'>
          <h1>Score {playerScore}</h1>
          <p>use the arrow keys to move</p>
        </div>

        {renderScore && this.score()}

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
        
        <Music song={Song} />
      </section>
    );
  }
}

