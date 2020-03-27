import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Routes/HomePage/HomePage";
import MarketPage from "../../Routes/MarketPage/MarketPage";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Instruction from "../Instruction/Instruction";
import Footer from "../Footer/Footer";
import EndPage from '../../Routes/EndPage/EndPage'
import BooleanContext from "../../Context/BooleanContext";
import "./App.css";

class App extends Component {
  static contextType = BooleanContext;

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/market"} component={MarketPage} />
            <Route path={"/end"} component={EndPage}/>
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
