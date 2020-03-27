import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
//import "./EndPage.css";




export default class EndPage extends Component {
  static contextType = PersonContext;
 
  render() {
    return (
      <section className="EndPage">
          
        <Link to="/">
          <button>Try again</button>
        </Link>
      </section>
    );
  }
}