import React, { Component } from 'react'

import LandingPage from '../LandingPage/LandingPage'
import StartPage from '../StartPage/StartPage'
import GamePage from '../GamePage/GamePage'
import BooleanContext from "../../Context/BooleanContext";
//import './HomePage.css'



export default class HomePage extends Component {
    static contextType = BooleanContext
    render() {
        return (
            <div className='homePage'>
                {this.context.start && <LandingPage />}
                {this.context.userPage && <StartPage />}
                {this.context.game ? <GamePage/> : null}
            </div>
        )
    }
}
