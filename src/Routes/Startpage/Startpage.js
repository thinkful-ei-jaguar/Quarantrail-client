import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
//import './HomePage.css'

// const person = {
//   health: 100,
//   boredom: 100,
//   toilet: 5,
//   food: 5
// };

export default class HomePage extends Component {
  static contextType = PersonContext;

  state = {
    name: ""
  };

  handleStartGame = event => {
    event.preventDefault();
  };

  updateName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div className="startpage">
        {/* <img src="" alt="character" /> */}
        <form onSubmit={this.handleStartGame}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.updateName}
            required
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
