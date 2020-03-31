import React, { Component } from "react";
import BooleanContext from "../../Context/BooleanContext";
import "./LandingPage.css";
import Virus from "../../Images/virus.png";
// import { Audio } from 'expo';
// import Sound from 'react-sound'

export default class LandingPage extends Component {
  static contextType = BooleanContext;

  // async componentDidMount() {
  //   this.backgroundMusic = new Audio.Sound();
  //   try {
  //     await this.backgroundMusic.loadAsync(
  //       require("../Sound/8bitmenu.mp3")
  //     );
  //     await this.backgroundMusic.setIsLoopingAsync(true);
  //     await this.backgroundMusic.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     // An error occurred!
  //   }
  // }

  // componentDidMount() {
  //   this.audio = new Audio("../Sound/8bitmenu.mp3")
  //   this.audio.load()
  //   this.playAudio()
  // }

  // playAudio() {
  //   const audioPromise = this.audio.play()
  //   if (audioPromise !== undefined) {
  //     audioPromise
  //       .then(_ => {
  //         // autoplay started
  //       })
  //       .catch(err => {
  //         // catch dom exception
  //         console.info(err)
  //       })
  //   }
  // }

  render() {
    this.audio = new Audio('../Sound/8bitmenu.mp3');
    return (
      <div className="landingpage">
        <img src={Virus} alt="virus logo" />
        <h1>Corona Trail</h1>
        <p>Covid-19</p>
        <button onClick={this.context.renderUser}>Start</button>
        <p className="player">1 Player</p>
        {/* {this.audio.play()} */}
        {/* <audio src={'../Sound/8bitmenu.mp3'} autoPlay/> */}
        {/* <audio autoPlay>
          <source src="../Sound/8bitmenu.mp3" type="audio/mpeg" />
        </audio> */}
        {/* <Sound
          url='../Sound/8bitmenu.mp3'
          playStatus={Sound.status.PLAYING}
          loop={true}
        /> */}
      </div>
    );
  }
}
