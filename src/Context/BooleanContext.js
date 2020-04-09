import React, { Component } from "react";

const BooleanContext = React.createContext({
  error: null,
  leader: false,
  instructions: false,
  start: true,
  userPage: false,
  game: false,
  endgame: false,
  curveball: false,
  renderCurve: false,
  mute: false,
  updateMute: () => {},
  updateCurve: () => {},
  updateRenderCurve: () => {},
  renderGame: () => {},
  renderEndGame: () => {},
  renderRestart: () => {},
  renderUser: () => {},
  toggleLeader: () => {},
  toggleInstruct: () => {},
  setError: () => {},
  clearError: () => {}
});

export default BooleanContext;

export class BooleanProvider extends Component {
  state = {
    error: null,
    leader: false,
    instructions: false,
    start: true,
    userPage: false,
    game: false,
    endgame: false,
    curveball: false,
    renderCurve: false,
    mute: false
  };

  updateMute = () => {
    this.setState({ mute: !this.state.mute });
  };

  updateCurve = bool => {
    this.setState({
      curveball: bool
    });
  };

  updateRenderCurve = bool => {
    this.setState({
      renderCurve: bool
    });
  };

  renderGame = () => {
    this.setState({
      userPage: false,
      game: true
    });
  };
  renderEndGame = () => {
    this.setState({
      game: false,
      endgame: true
    });
  };

  renderUser = () => {
    this.setState({
      start: false,
      userPage: true
    });
  };
  renderRestart = () => {
    this.setState(
      {
        start: true,
        userPage: false,
        game: false,
        endgame: false,
        renderCurve: false
      }
    );
  };

  toggleLeader = () => {
    if (this.instructions === true) {
      this.toggleInstruct();
    }
    this.setState({ leader: !this.state.leader });
  };

  toggleInstruct = () => {
    if (this.leader === true) {
      this.toggleLeader();
    }
    this.setState({ instructions: !this.state.instructions });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      error: this.state.error,
      leader: this.state.leader,
      instructions: this.state.instructions,
      start: this.state.start,
      userPage: this.state.userPage,
      game: this.state.game,
      curveball: this.state.curveball,
      renderCurve: this.state.renderCurve,
      mute: this.state.mute,
      updateMute: this.updateMute,
      updateCurve: this.updateCurve,
      updateRenderCurve: this.updateRenderCurve,
      renderGame: this.renderGame,
      renderEndGame: this.renderEndGame,
      renderRestart: this.renderRestart,
      renderUser: this.renderUser,
      toggleLeader: this.toggleLeader,
      toggleInstruct: this.toggleInstruct,
      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <BooleanContext.Provider value={value}>
        {this.props.children}
      </BooleanContext.Provider>
    );
  }
}
