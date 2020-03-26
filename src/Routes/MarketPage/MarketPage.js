import React, { Component } from "react";
import { Link } from "react-router-dom";
import PersonContext from "../../Context/PersonContext";
import TraderLogo from "../../Images/Trader_jones.svg";
import StatusBar from '../../Components/StatusBar/StatusBar';
import Day from '../../Components/Day/Day';
import Stock from '../../Components/Stock/Stock'
import Store from '../../Components/Store/Store'



export default class MarketPage extends Component {
  static contextType = PersonContext;

  state ={
   shopping: false
  }

  handleShop = () => {
    this.setState({shopping: !this.state.shopping})
  }

  render() {
    const {shopping} = this.state
    return (
      <section className="marketpage">
        <img src={TraderLogo} alt="trader jone's" />
        <StatusBar />
        <Day />
        <Stock />
        <Link to="/">
          <button>Home</button>
        </Link>
        <button className='shop-button' onClick={this.handleShop}>
          Shop
        </button>
        <div className='store-section'>
          {shopping && <Store />}
        </div>
      </section>
    );
  }
}
