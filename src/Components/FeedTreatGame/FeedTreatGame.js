import React, { Component } from "react";
import CatSize from "./CatSize";
import CatTreat from "./CatTreat";
import "./FeedTreatGame.css";

const getRandomPosition = () => {
  let min = 1;
  let max = 78;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 6) * 6;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 6) * 6;
  return [x, y];
};

const initialState = {
  direction: "RIGHT",
  speed: 80,
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
    setInterval(this.moveCat, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBound();
    this.checkIfCollided();
    this.checkIfFoundTreat();
  }

  onKeyDown = e => {
    // Handling of browser differences
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
    }
  };

  moveCat = () => {
    let cat = [...this.state.catLength];
    let head = cat[cat.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 6, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 6, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 6];
        break;
      case "DOWN":
        head = [head[0], head[1] + 6];
        break;
    }
    cat.push(head);
    cat.shift();
    this.setState({ catLength: cat });
  };

  checkIfOutOfBound() {
    const { catLength } = this.state;
    let head = catLength[catLength.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.endGame();
    }
  }

  checkIfCollided() {
    let cat = [...this.state.catLength];
    let head = cat[cat.length - 1];
    cat.pop();
    cat.forEach(size => {
      if (head[0] === size[0] && head[1] === size[1]) {
        this.endGame();
      }
    });
  }

  checkIfFoundTreat() {
    const { catLength, treat } = this.state;
    let head = catLength[catLength.length - 1];
    if (head[0] === treat[0] && head[1] === treat[1]) {
      this.setState({
        treat: getRandomPosition()
      });
      this.growCat();
      this.addSpeed();
    }
  }

  growCat() {
    let newCat = [...this.state.catLength];
    newCat.unshift([]);
    this.setState({ catLength: newCat });
  }

  addSpeed() {
    if (this.state.speed > 10) {
      this.setState({ speed: this.state.speed - 10 });
    }
  }

  endGame() {
    // alert(`Cat is full now.`);
    this.setState(initialState);
  }

  render() {
    return (
      <section className="feedTreatGame">
        <div className="grassField">
          <CatSize catLength={this.state.catLength} />
          <CatTreat position={this.state.treat} />
        </div>
      </section>
    );
  }
}
