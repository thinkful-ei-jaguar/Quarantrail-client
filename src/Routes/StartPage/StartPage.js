import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./StartPage.css";
import Character from "../../Components/Character/Character";
import Sound from 'react-sound'
import soundMenu from '../../Sound/8bitmenu.mp3'

export default class StartPage extends Component {
  static contextType = PersonContext;

  handleStartGame = event => {
    event.preventDefault();
    this.props.context.renderGame();
  };

  updateName = event => {
    this.context.setName(event.currentTarget.value);
  };

  render() {
    return (
      <div className="startPage">
        <Character />
        <form className="nameForm" onSubmit={e => this.handleStartGame(e)}>
          <div className="startPage-inputbox">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              type="text"
              value={this.context.name}
              onChange={this.updateName}
              required
            ></input>
          </div>
          <button>Submit</button>
        </form>
        <Sound
          url={soundMenu}
          playStatus={Sound.status.PLAYING}
          loop={true}
        />
      </div>
    );
  }
}
