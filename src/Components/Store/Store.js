import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import "./Store.css"

export default class Store extends Component {
    static contextType = PersonContext;

    state ={
      foodCounter: 0,
      toiletPaperCounter: 0
    }

    handlePlusFood = () => {
      if(this.state.foodCounter === 6) {
        return;
      }
      this.setState({foodCounter: this.state.foodCounter+1})

    }

    handleMinusFood = () => {
      if(this.state.foodCounter === 0){
        return;
      }
      this.setState({foodCounter: this.state.foodCounter-1})
    }

    handlePlusTp = () => {
      if(this.state.toiletPaperCounter === 6) {
        return;
      }
      this.setState({toiletPaperCounter: this.state.toiletPaperCounter+1})
    }

    handleMinusTp = () => {
      if(this.state.toiletPaperCounter === 0) {
        return;
      }
      this.setState({toiletPaperCounter: this.state.toiletPaperCounter-1})
    }

    handleCheckout = () => {
      const {foodCounter, toiletPaperCounter} = this.state
      console.log(`You bought ${foodCounter} cups of noodles and ${toiletPaperCounter} rolls of toilet paper!`)
    }

    render() {
      const {foodCounter, toiletPaperCounter } = this.state
        return(
        <div className="store">
            <p>Welcome to Trader Jone's! As you see were a little bare right now due to the crisis, but hey all business is good business right? Look around and let me know if you'd like any food or toilet paper.</p>
            <div className='store-food'>
              <p>Food</p>
              {foodCounter}
              <button onClick={this.handlePlusFood}>+</button>
              <button onClick={this.handleMinusFood}>-</button>
            </div>
            <div className='store-toilet-paper'>
              <p>Toilet Paper</p>
              {toiletPaperCounter}
              <button onClick={this.handlePlusTp}>+</button>
              <button onClick={this.handleMinusTp}>-</button>
            </div>
            <button className='checkout-button' onClick={this.handleCheckout}>Buy</button>
        </div>
      )}
}