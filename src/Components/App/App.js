import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Routes/HomePage/HomePage";
import MarketPage from "../../Routes/MarketPage/MarketPage";
import ParkPage from "../../Routes/ParkPage/ParkPage";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Instruction from "../Instruction/Instruction";
import Footer from "../Footer/Footer";
import EndPage from "../../Routes/EndPage/EndPage";
// import SimpleGame from "../../Components/SimpleGame/SimpleGame";
import miniGame from "../../Components/minigame/minigame";
import FeedTreatGame from "../../Components/FeedTreatGame/FeedTreatGame";
import Runner from "../../Components/Runner/Runner";

import BooleanContext from "../../Context/BooleanContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkedAlt,
  faStore,
  faTree,
  faToiletPaper,
  faGamepad,
  faMobileAlt,
  faUsers,
  faSoap,
  faUtensils,
  faUserFriends,
  faBed,
  faBoxOpen,
  faShoppingCart,
  faHome,
  faRunning,
  faBone,
  faVirus,
  faFlushed,
  faIcons,
  faComment,
  faVolumeUp,
  faVolumeMute
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
library.add(
  faMapMarkedAlt,
  faStore,
  faTree,
  faToiletPaper,
  faGamepad,
  faUsers,
  faMobileAlt,
  faSoap,
  faUtensils,
  faUserFriends,
  faBed,
  faBoxOpen,
  faShoppingCart,
  faHome,
  faRunning,
  faBone,
  faVirus,
  faFlushed,
  faIcons,
  faComment,
  faVolumeUp,
  faVolumeMute
);

class App extends Component {
  static contextType = BooleanContext;

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => {
                return <HomePage {...props} />;
              }}
            />
            <Route
              path={"/market"}
              render={props => {
                return <MarketPage {...props} />;
              }}
            />
            <Route
              path={"/park"}
              render={props => {
                return <ParkPage {...props} />;
              }}
            />
            <Route
              path={"/end"}
              render={props => (
                <EndPage
                  {...props}
                  renderRestart={this.context.renderRestart}
                />
              )}
            />
            {/* <Route exact path={"/game"} component={SimpleGame} /> */}
            <Route exact path={"/washHands"} component={miniGame} />
            <Route exact path={"/feedTreats"} component={FeedTreatGame} />
            <Route exact path={"/runner"} component={Runner} />
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
