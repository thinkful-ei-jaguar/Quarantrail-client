import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import "./LandingPage.css";

export default class LandingPage extends Component {
  static contextType = PersonContext;
  render() {
    return (
      <div className="landingpage">
        <h1>Corona Trail</h1>
        <Link to="/start">
          <button>Start</button>
        </Link>
      </div>
    );
  }
}
