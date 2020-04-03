import React, { Component } from "react";
import BooleanContext from "../../Context/BooleanContext";
import Sound from "react-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Music.css";

export default class Music extends Component {
  static contextType = BooleanContext;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="music">
        <button onClick={this.context.updateMute}>
          <FontAwesomeIcon
            icon={this.context.mute ? "volume-mute" : "volume-up"}
          />
        </button>
        <Sound
          url={this.props.song}
          playStatus={
            this.context.mute ? Sound.status.PAUSED : Sound.status.PLAYING
          }
          loop={true}
        />
      </div>
    );
  }
}
