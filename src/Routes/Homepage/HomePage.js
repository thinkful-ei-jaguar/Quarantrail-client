import React, { Component } from 'react'
import PersonContext from '../../Context/PersonContext'
//import './HomePage.css'

const person={
    health:100,
    boredom:100,
    toilet:5,
    food:5,
}

export default class HomePage extends Component {

    static contextType = PersonContext

    renderUser = () => {
        /**
         * get userName and set it in context
         */
    }

    render() {
        return (
            <div>
                {/**
                 * ternarys here for if footer popup components should render?
                 */}

                <h1>CORONA TRAIL</h1>
                <button onClick={this.renderUser}>Start</button>

                <div className='footer'>
                    <button onClick={this.context.toggleLeader}>Leadership Board</button>
                    <button onClick={this.context.toggleInstruct}>Instructions</button>
                </div>
            </div>
        )
    }
}
