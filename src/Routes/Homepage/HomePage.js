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

    render() {
        return (
            <div className='homePage'>
                {/**
                 * ternarys here for if footer popup components should render?
                 * {(this.context.leader) && <LeaderBoard /> }
                 * {(this.context.instructions) && <Instructions /> }
                 */}

                {/**
                 * more ternarys for startPage, userPage, and finally the gamePage
                 */}

                {this.context.start ? <section className='startPage'>
                    <h1>CORONA TRAIL</h1>
                    <button onClick={this.context.renderUser}>Start</button>
                </section> : null}

                {this.context.userPage ? <section className='userPage'>
                    <p>THIS IS THE USER PAGE</p>
                    <button onClick={this.context.renderGame}>Submit</button>
                </section> : null}

                {this.context.game ? <section className='gamePage'>
                    <p>THIS IS THE GAME PAGE</p>
                </section> : null}            

                <section className='footer'>
                    <button onClick={this.context.toggleLeader}>Leadership Board</button>
                    <button onClick={this.context.toggleInstruct}>Instructions</button>
                </section>
            </div>
        )
    }
}
