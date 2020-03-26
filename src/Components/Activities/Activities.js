import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './Activities.css'

export default class Activities extends Component {
    static contextType = PersonContext;
    constructor(props) {
        super(props);
        this.state = {
          options: {
            first: 1,
            second: 2,
            third: 3
          }
        };
      }


    render() {
      // const options = {
      //   first: this.props.first,
      //   second: this.props.second,
      //   third: this.props.third
      // }
        return <div class="none">
        <h1>Activities:</h1>
          <button class="mybutton">{this.state.options.first}</button>
          <button class="mybutton">{this.state.options.second}</button>
          <button class="mybutton">{this.state.options.third}</button>
        </div>
      }
}
