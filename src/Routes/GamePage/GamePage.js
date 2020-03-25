import React, { Component } from 'react'
import PersonContext from '../../Context/PersonContext'
import StatusBar from '../../Components/StatusBar/StatusBar'
import Day from '../../Components/Day/Day'

export default class GamePage extends Component {
    person = {
        health: 80,
        boredom: 20,
        toilet: 5,
        food: 5,
        day: 15
    }

    static contextType = PersonContext

    render() {
        return(
        <div className='gamePage'>
            <StatusBar person={this.person}/>
            <Day person={this.person}/>
        </div>
        )
    }
}