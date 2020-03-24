import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
//import './HomePage.css'

export default class HomePage extends Component {
  static contextType = PersonContext;
  render() {
    return (
      <div className="homepage">
        <h1>Corona Trail</h1>
        <Link to="/start">
          <button>Start</button>
        </Link>
      </div>
    );
  }
}
