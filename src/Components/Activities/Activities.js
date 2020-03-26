import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import './Activities.css'

export default class Activities extends Component {
    static contextType = PersonContext;
    render() {
        return <div class="none">
            <h1>Activities:</h1>
            <button class="mybutton"onClick={()=> this.context.addToHealth(10)}>1</button>
            <button class="mybutton"onClick={()=> this.context.addToHealth(-10)}>2</button>
            <button class="mybutton">3</button>
        </div>
      }
}
