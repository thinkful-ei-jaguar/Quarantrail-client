import React, { Component } from 'react'
import PersonContext from '../../Context/PersonContext'
//import './HomePage.css'

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
