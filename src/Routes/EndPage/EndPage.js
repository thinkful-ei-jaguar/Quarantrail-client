import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import LeaderboardService from "../../services/leaderboard-service";
import Music from "../../Components/Music/Music";
import Song from "../../Sound/seeyouagain.mp3";
import "./EndPage.css";
export default class EndPage extends Component {
  static contextType = PersonContext;

  handleRestart = () => {
    this.context.resetDay();
    const post = {
      name: this.context.name,
      score: this.context.day
    };
    this.context.updateRenderCurve(false);
    //LeaderboardService.postScore(post)
    this.props.renderRestart();
    return <Redirect to="/" />;
  };
  render() {
    let day;
    if (this.context.day === 1) {
      day = "day";
    } else day = "days";
    return (
      <section className="EndPage">
        <div class="popupScreen middle">
          <h1>{this.context.dead}</h1>
          <h2>
            You have survived {this.context.day} {day}
          </h2>
          <Link to="/">
            <button className="popupButton" onClick={this.handleRestart}>
              Try again
            </button>
          </Link>
        </div>
        <Music song={Song} />
      </section>
    );
  }
}
