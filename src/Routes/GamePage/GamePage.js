import React, { Component } from 'react'
import Stock from '../../Components/Stock/Stock'
import Activities from '../../Components/Activities/Activities'
import PersonContext from '../../Context/PersonContext'

import './GamePage.css'
/*<Stock></Stock>
<Activities></Activities>*/


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
            <Stock/>
            <Activities/>
        </section> : null}            
        </div>
        )
    }

}