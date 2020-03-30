import React, { Component } from "react";

import LandingPage from "../LandingPage/LandingPage";
import StartPage from "../StartPage/StartPage";
import GamePage from "../GamePage/GamePage";
import BooleanContext from "../../Context/BooleanContext";

export default class HomePage extends Component {
    static contextType = BooleanContext

    render() {
        return (
            <div className='homePage'>
                {this.context.start && <LandingPage />}
                {this.context.userPage && <StartPage context={this.context}/>}
                {this.context.game && <GamePage />}
            </div>
        )
    }
}
