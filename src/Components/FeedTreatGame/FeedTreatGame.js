import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatTreat from "./CatTreat";
import Treat from "../../Images/treat.svg";
import Arrows from "../../Images/gameArrow.svg";
import "./FeedTreatGame.css";

const getRandomPosition = () => {
  let min = 1;
  let max = 78;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 6) * 6;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 6) * 6;
  return [x, y];
};

const initialState = {
  // direction: "RIGHT",
  done: false,
  instruction: true,
  count: 0,
  treat: getRandomPosition(),
  catLength: [
    [0, 0],
    [6, 0]
  ]
};

export default class FeedTreatGame extends Component {
  /* 1 length for head and 1 for tail */
  state = initialState;

  componentDidMount() {
    // setInterval(this.moveCat, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBound();
    // this.checkIfCollided();
    this.checkIfFoundTreat();
  }

  onKeyDown = e => {
    let cat = [...this.state.catLength];
    let head = cat[cat.length - 1];
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        // this.setState({ direction: "UP", top: 0, bottom: 1 });
        head = [head[0], head[1] - 6];
        break;
      case 40:
        // this.setState({ direction: "DOWN", top: 0, bottom: 0 });
        head = [head[0], head[1] + 6];
        break;
      case 37:
        // this.setState({ direction: "LEFT", top: 0, bottom: 1 });
        head = [head[0] - 6, head[1]];
        break;
      case 39:
        // this.setState({ direction: "RIGHT", top: 0, bottom: 1 });
        head = [head[0] + 6, head[1]];
        break;
    }
    cat.push(head);
    cat.shift();
    this.setState({ catLength: cat, instruction: false });
  };

  // moveCat = () => {
  //   let cat = [...this.state.catLength];
  //   let head = cat[cat.length - 1];

  //   switch (this.state.direction) {
  //     case "RIGHT":
  //       head = [head[0] + 6, head[1]];
  //       break;
  //     case "LEFT":
  //       head = [head[0] - 6, head[1]];
  //       break;
  //     case "UP":
  //       head = [head[0], head[1] - 6];
  //       break;
  //     case "DOWN":
  //       head = [head[0], head[1] + 6];
  //       break;
  //   }
  //   cat.push(head);
  //   cat.shift();
  //   this.setState({ catLength: cat });
  // };

  checkIfOutOfBound() {
    const { catLength } = this.state;
    let head = catLength[catLength.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.endGame();
    }
  }

  // checkIfCollided() {
  //   let cat = [...this.state.catLength];
  //   let head = cat[cat.length - 1];
  //   cat.pop();
  //   cat.forEach(size => {
  //     if (head[0] === size[0] && head[1] === size[1]) {
  //       this.endGame();
  //     }
  //   });
  // }

  checkIfFoundTreat() {
    const { catLength, treat, count } = this.state;
    let head = catLength[catLength.length - 1];
    if (head[0] === treat[0] && head[1] === treat[1]) {
      if (count === 4) {
        this.setState({
          treat: getRandomPosition(),
          count: count + 1,
          done: true
        });
      } else
        this.setState({
          treat: getRandomPosition(),
          count: count + 1
        });
    }
  }

  // growCat() {
  //   let newCat = [...this.state.catLength];
  //   newCat.unshift([]);
  //   this.setState({ catLength: newCat });
  // }

  // addSpeed() {
  //   if (this.state.speed > 10) {
  //     this.setState({ speed: this.state.speed - 10 });
  //   }
  // }
  renderFinished = () => {
    document.onkeydown = null;
    return (
      <div className="popupScreen">
        <p>Rocky is content!</p>
        <Link
          to={{
            pathname: "/park",
            state: {
              washHands: true
            }
          }}
        >
          <button className="popupButton">Done</button>
        </Link>
      </div>
    );
  };

  renderInstruction = () => {
    return (
      <div className="popupScreen">
        <p>You have 10 seconds to feed Rocky 5 fish bites!</p>
        <p>To move, press: </p>
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

        <div className="grassField">
          {/* <CatSize catLength={this.state.catLength} /> */}
          {/* <div className="cat"> */}
          {this.state.catLength.map((length, i) => {
            const style = { left: `${length[0]}%`, top: `${length[1]}%` };
            let features = "";
            if (this.state.done || this.state.instruction) {
              features = "hide";
            } else {
              if (i === 0) {
                features = "catLength catHead";
              } else features = "catLength catTail";
              return (
                <div className={features} key={"cat" + i} style={style}></div>
              );
            }
          })}
          {/* </div> */}
          <CatTreat
            finished={this.state.done}
            instruction={this.state.instruction}
            position={this.state.treat}
          />
        </div>
        {this.state.done && this.renderFinished()}
        {this.state.instruction && this.renderInstruction()}
      </section>
    );
  }
}
