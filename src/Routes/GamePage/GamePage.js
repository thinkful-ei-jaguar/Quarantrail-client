import React, { Component  } from "react";
import { Link, Redirect } from "react-router-dom";
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
  constructor(props){
    super(props);
    this.state={
      lose:false,
    }
  }
  componentDidMount(){
    if(this.context.day===0){
      gameService.getGameinfo()
      .then(info=>{
          this.context.setPersonInfo(info);
          console.log(this.context)
      }) 
      .catch(this.context.setError)
    }  
  }
  checkIfYadied=()=>{
    if(this.context.starter.health >=100){
      console.log("dead");
    }
  }



  render() {
    this.checkIfYadied();
    if(this.state.lose===true){
      return <Redirect to='/end'/>
    }
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
