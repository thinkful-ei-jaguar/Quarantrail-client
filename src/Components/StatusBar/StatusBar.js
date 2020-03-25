import React from "react";
import './StatusBar.css'

function StatusBar(props) {
    const remCorona = 100 - props.person.health
    const remBoredom = 100 - props.person.boredom

    return (
        <section className='StatusBar'>
          <div className='bar'>
            <div id='corona' style={{'width': props.person.health+'%'}}><p>{props.person.health}%</p></div>
            <div className='remaining' style={{'width': remCorona+'%'}}></div>
          </div>

          <div className='bar'>
            <div id='boredom' style={{'width': props.person.boredom+'%'}}><p>{props.person.boredom}%</p></div>
            <div className='remaining' style={{'width': remBoredom+'%'}}></div>
          </div>
        </section>
    )
}

export default StatusBar;