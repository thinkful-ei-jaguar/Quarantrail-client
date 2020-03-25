import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Routes/HomePage/HomePage";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Instruction from "../Instruction/Instruction";
import Footer from "../Footer/Footer";
import BooleanContext from '../../Context/BooleanContext'
import "./App.css";

class App extends Component {
  static contextType = BooleanContext

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
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

//<Route path={"/home"} component={HomePage} />