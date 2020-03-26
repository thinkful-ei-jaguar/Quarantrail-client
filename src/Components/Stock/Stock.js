import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./Stock.css"

export default class Stock extends Component {
    static contextType = PersonContext;
    constructor(props) {
    super(props);
    this.state = {
        showStocks:false,
        };
    }
   
    handleClick =() =>{
        console.log(this.state);
        let show=!this.state.showStocks;
        this.setState({
            showStocks:show,
        })
    }
    stockFormat(){
        return (
        <div>
            <h1>Stocks</h1>
            <p>Food:{this.context.starter.food}</p>
            <p>ToiletPaper:{this.context.starter.toiletpaper}</p>
        </div>
        )
    }

    render() {
        return <div class="bot">
            <button onClick={this.handleClick}>Stock</button>
            {this.state.showStocks ?this.stockFormat():<></>}
        </div>
      }
}
