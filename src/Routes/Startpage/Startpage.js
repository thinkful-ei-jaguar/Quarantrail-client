import React, { Component } from "react";
import BooleanContext from "../../Context/BooleanContext";
import PersonContext from '../../Context/PersonContext'
import "./StartPage.css";

export default class StartPage extends Component {
  static contextType = BooleanContext;
  //static contextType = PersonContext

  state = {
    name: ""
  };

  handleStartGame = event => {
    event.preventDefault();
  };

  updateName = event => {
    this.setState({ name: event.currentTarget.value });
    //this.context.setName(event.currentTarget.value)
  };

  render() {
    return (
      <div className="startpage">
        <img
          className="startpage-character"
          src="https://vignette.wikia.nocookie.net/caillou/images/b/b5/Cailloupose4.png/revision/latest/scale-to-width-down/340?cb=20160225062906"
          alt="character"
        />
        <form onSubmit={this.handleStartGame}>
          <div className="startpage-inputbox">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              type="text"
              //value={this.context.name}
              value={this.state.name}
              onChange={this.updateName}
              required
            ></input>
          </div>
          <button onClick={this.context.renderGame}>Submit</button>
        </form>      
      </div>
    );
  }
}
