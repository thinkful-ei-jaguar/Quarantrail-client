import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Routes/HomePage/HomePage";
import MarketPage from "../../Routes/MarketPage/MarketPage";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Instruction from "../Instruction/Instruction";
import Footer from "../Footer/Footer";
import EndPage from "../../Routes/EndPage/EndPage";
import SimpleGame from "../../Components/SimpleGame/SimpleGame"


import BooleanContext from "../../Context/BooleanContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkedAlt,
  faStore,
  faGamepad,
  faMobileAlt,
  faUsers,
  faSoap,
  faUtensils,
  faTreeAlt,
  faHomeLg,
  faBoxHeart,
  faGameConsoleHandheld,
  faPhoneRotary,
  faUserFriends,
  faBed
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
library.add(
  faMapMarkedAlt,
  faStore,
  faGamepad,
  faUsers,
  faMobileAlt,
  faSoap,
  faUtensils,
  // faTreeAlt,
  // faHomeLg,
  // faBoxHeart,
  // faGameConsoleHandheld,
  // faPhoneRotary,
  faUserFriends,
  faBed
);

// <i class="fad fa-map-marked-alt"></i>
// <i class="fad fa-store"></i>;
// <i class="fad fa-tree-alt"></i>
// <i class="fad fa-home-lg"></i>
// <i class="fad fa-box-heart"></i>
// <i class="fad fa-game-console-handheld"></i>
// <i class="fad fa-phone-rotary"></i>
// <i class="fad fa-user-friends"></i>
// <i class="fad fa-bed"></i>

class App extends Component {
  static contextType = BooleanContext;

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/market"} component={MarketPage} />
            <Route path={"/end"} render={(props) => <EndPage {...props} renderRestart={this.context.renderRestart}/>}/>
            <Route exact path={"/game"} component={SimpleGame} />
          </Switch>
          {this.context.leader && <LeaderBoard />}
          {this.context.instructions && <Instruction />}
          <Footer
            toggleLeaderBoard={this.context.toggleLeader}
            toggleInstruction={this.context.toggleInstruct}
          />
        </main>
      </div>
    );
  }
}
export default App;
