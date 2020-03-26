import React, { Component } from "react";
import { Link } from "react-router-dom";
import Stock from "../../Components/Stock/Stock";
import Activities from "../../Components/Activities/Activities";
import PersonContext from "../../Context/PersonContext";
import "./GamePage.css";
import StatusBar from "../../Components/StatusBar/StatusBar";
import FirstDay from "../../Components/FirstDay/FirstDay"
import Day from "../../Components/Day/Day";
import gameService from '../../services/gameService'



export default class GamePage extends Component {
  static contextType = PersonContext;
  constructor(props) {
    super(props);
    this.state = {
        firstday:false,
        };
    }

  componentDidMount(){
    gameService.getGameinfo()
    .then(info=>{
        this.context.setPersonInfo(info);
        console.log(this.context)
    }) 
    .catch(this.context.setError)  
  }
  handleClickFirstDay =() =>{
    let show=!this.state.firstday;
    this.setState({
      firstday:show,
    })
  }

  render() {
    return (
      <section className="gamePage">
        {this.context.day===0?<FirstDay/>:<></>}
        <StatusBar/>
        <Day/>
        <Stock />
        <Activities />
        <Link to="/market">
          <button>Market</button>
        </Link>
      </section>
    );
  }
}
