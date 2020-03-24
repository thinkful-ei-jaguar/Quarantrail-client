import React from "react";

function LeaderBoard() {
  return (
    <section className="leaderboard">
      <div>
        <img src="http://placehold.jp/150x150.png" alt="2nd place" />
        <img src="http://placehold.jp/200x200.png" alt="1nd place" />
        <img src="http://placehold.jp/150x150.png" alt="3nd place" />
      </div>
      <ul>
        <li>
          <span className="leaderboard-place">1</span>
          <span className="leaderboard-name">name 1</span>
          <span className="leaderboard-score">#days</span>
        </li>
        <li>
          <span className="leaderboard-place">2</span>
          <span className="leaderboard-name">name 2</span>
          <span className="leaderboard-score">#days</span>
        </li>
        <li>
          <span className="leaderboard-place">3</span>
          <span className="leaderboard-name">name 3</span>
          <span className="leaderboard-score">#days</span>
        </li>
      </ul>
    </section>
  );
}
export default LeaderBoard;
