import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatTreat from "./CatTreat";
import Treat from "../../Images/treat.svg";
import Arrows from "../../Images/gameArrow.svg";
import Music from "../../Components/Music/Music";
import Song from "../../Sound/morningmagic.mp3";
import Rocky from "../../Images/gameCat.svg";
import "./FeedTreatGame.css";

const getRandomPosition = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - 3) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - 3) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  timer: 20,
  direction: "right",
  done: false,
  instruction: true,
  count: 0,
  treat: getRandomPosition(),
  catLength: [[0, 0]]
};

let intervalId;

export default class FeedTreatGame extends Component {
  state = initialState;

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  componentWillUnmount() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  componentDidUpdate() {
    this.checkIfFoundTreat();
  }

  startTimer = () => {
    if (this.state.instruction === true) {
      intervalId = setInterval(() => {
        if (this.state.timer === 0) {
          this.setState({ done: true });
        } else {
          this.setState({ timer: this.state.timer - 1 });
        }
      }, 1000);
    }
  };

  onKeyDown = e => {
    this.startTimer();
    let cat = [...this.state.catLength];
    let head = cat[cat.length - 1];
    let tmpDirection;
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if (head[1] - 2 >= 0) {
          head = [head[0], head[1] - 2];
        }
        tmpDirection = "up";
        break;
      case 40:
        if (head[1] + 2 <= 94) {
          head = [head[0], head[1] + 2];
        }
        tmpDirection = "down";
        break;
      case 37:
        if (head[0] - 2 >= 0) {
          head = [head[0] - 2, head[1]];
        }
        tmpDirection = "left";
        break;
      case 39:
        if (head[0] + 2 <= 94) {
          head = [head[0] + 2, head[1]];
        }
        tmpDirection = "right";
        break;
      default: break;
    }
    cat.push(head);
    cat.shift();
    this.setState({
      catLength: cat,
      instruction: false,
      direction: tmpDirection
    });
  };

  checkIfFoundTreat = () => {
    const { catLength, treat, count } = this.state;
    let head = catLength[catLength.length - 1];
    if (
      head[0] >= treat[0] - 4 &&
      head[0] <= treat[0] &&
      head[1] >= treat[1] - 2 &&
      head[1] <= treat[1] + 4
    ) {
      if (count === 4) {
        this.setState({
          treat: getRandomPosition(),
          count: count + 1,
          done: true
        });
      } else {
        this.setState({
          treat: getRandomPosition(),
          count: count + 1
        });
      }
    }
  };

  renderFinished = () => {
    let message = "";
    if (intervalId) {
      clearInterval(intervalId);
    }
    document.onkeydown = null;
    if (this.state.count === 5) {
      message = "Rocky is content!";
    } else {
      message = "Rocky is sad and hungry.";
    }
    return (
      <div className="popupScreen">
        <p>{message}</p>
        <Link to="/park">
          <button className="popupButton">Done</button>
        </Link>
      </div>
    );
  };

  renderInstruction = () => {
    return (
      <div className="popupScreen">
        <p>You have 20 seconds to feed Rocky 5 fish bites!</p>
        <p>To move: </p>
        <img className="arrowKeys" src={Arrows} alt="arrow keys" />
      </div>
    );
  };

  render() {
    return (
      <section className="feedTreatGame">
        <h1>Catch the fish bites</h1>
        <p className="treatScore">
          <img src={Treat} alt="treat" />
          {this.state.count}
        </p>
        <div className="timerContainer">
          <p>Timer {this.state.timer}</p>
        </div>
        <div className="grassField">
          {this.state.catLength.map((length, i) => {
            const style = { left: `${length[0]}%`, top: `${length[1]}%` };
            let features;
            if (this.state.done || this.state.instruction) {
              features = "hide";
            } else {
              features = `catSize ${this.state.direction}`;
            }
            return (
              <img
                className={features}
                style={style}
                src={Rocky}
                alt="Rocky the cat"
              />
            );
          })}
          <CatTreat
            finished={this.state.done}
            instruction={this.state.instruction}
            position={this.state.treat}
          />
        </div>
        {this.state.done && this.renderFinished()}
        {this.state.instruction && this.renderInstruction()}
        <Music song={Song} />
      </section>
    );
  }
}
