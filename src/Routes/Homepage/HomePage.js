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
            <div>
                <p>
                    this is a home page
                </p>
            </div>
        )
    }
}
