import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";

export default class HomePage extends Component {
  static contextType = PersonContext;
  render() {
    return <div className="homepage">Hi</div>;
  }
}
