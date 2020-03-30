import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import LeaderboardService from "../../services/leaderboard-service"
import "./EndPage.css";




export default class EndPage extends Component {
  static contextType = PersonContext;
  handleRestart=()=>{
    this.context.resetDay();
    const post={
        name:this.context.name,
        score:this.context.day,
    }
    //LeaderboardService.postScore(post)

  }
  render() {
    return (
      <section className="EndPage">
        <div class ="middle1">
          <div class="box2">
            <h1>{this.context.dead}</h1>
            <h2>you have survived: {this.context.day} days</h2>
            <Link to="/">
              <button onClick={this.handleRestart}>Try again</button>
            </Link>
            </div>
        </div>
      </section>
    );
  }
}