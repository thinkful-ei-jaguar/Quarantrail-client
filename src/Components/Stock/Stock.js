import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./Stock.css"

export default class Stock extends Component {
    static contextType = PersonContext;
    constructor(props) {
    super(props);
    this.state = {
        food:0,
        toiletpaper:0,
        showStocks:false,
        };
    }
    componentDidMount(){
        this.setState({
            food:this.context.starter.food,
            toiletpaper:this.context.starter.toiletpaper
        })
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
            <p>Food:{this.state.food}</p>
            <p>ToiletPaper:{this.state.toiletpaper}</p>
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
