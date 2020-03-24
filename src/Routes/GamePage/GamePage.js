import React, { Component } from 'react'
import PersonContext from '../../Context/PersonContext'
//import './HomePage.css'

const person={
    health:100,
    boredom:100,
    toilet:5,
    food:5,
}


export default class GamePage extends Component {

    static contextType = PersonContext

    render() {
        return(
        <div>
        {this.context.game ? <section className='gamePage'>
            <p>THIS IS THE GAME PAGE</p>
        </section> : null}            
        </div>
        )
    }
}