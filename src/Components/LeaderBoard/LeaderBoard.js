import React, { Component } from "react";
import LeaderboardService from "../../services/leaderboard-service";
import Crown from "../../Images/crown.svg";
import "./LeaderBoard.css";

export default class LeaderBoard extends Component {
  state = {
    leaderboard: [],
    loaded: false,
    error: null
  };

  componentDidMount() {
    LeaderboardService.getScores().then(res => {
      this.setState({ leaderboard: res });
      this.setState({ loaded: true });
    });
  }

  renderTopScores() {
    const { leaderboard } = this.state;
    const topThree = [];
    for (let i = 0; i < 3; i++) {
      topThree.push(leaderboard[i]);
    }
    return (
      <>
        <div className="leaderboard-second">
          <span className="leaderboard-name">#2 {topThree[1].name} </span>
          <span className="leaderboard-score">{topThree[1].score} days</span>
        </div>
        <div className="leaderboard-first">
          <img src={Crown} alt="crown" />
          <br />
          <span className="leaderboard-name">#1 {topThree[0].name} </span>
          <span className="leaderboard-score">{topThree[0].score} days</span>
        </div>
        <div className="leaderboard-third">
          <span className="leaderboard-name">#3 {topThree[2].name} </span>
          <span className="leaderboard-score">{topThree[2].score} days</span>
        </div>
      </>
    );
  }

  renderScores() {
    const { leaderboard } = this.state;
    const scores = [];
    for (let i = 3; i < leaderboard.length; i++) {
      scores.push(leaderboard[i]);
    }
    return scores.map((score, i) => (
      <li className="leaderboard-list-item">
        {/* <span className="leaderboard-place">1</span> */}
        <span className="leaderboard-name">
          #{i + 4} {score.name}{" "}
        </span>
        <span className="leaderboard-score">{score.score} days</span>
      </li>
    ));
  }

  render() {
    const { loaded } = this.state;
    return (
      <section className="leaderboard-section">
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <div className="leaderboard-top-three">
            {loaded && this.renderTopScores()}
          </div>
          <ol className="leaderboard-list">{loaded && this.renderScores()}</ol>
        </div>
      </section>
    );
  }
}
