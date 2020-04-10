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
    LeaderboardService.postScore(post)
    this.props.renderRestart();
    return <Redirect to="/"/>;
  };
  render() {    

    return (
      <section className="EndPage">
        <div class="middle1">
          <div class="box2">
            <h1>{this.context.dead}</h1>
            <h2>you have survived: {this.context.day} days</h2>
            <Link to="/">
              <button onClick={this.handleRestart}>Try again</button>
            </Link>
            <Music song={Song} />
          </div>
        </div>
      </section>
    );
  }
}
