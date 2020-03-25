import React from "react";
import './Day.css'

function Day(props) {
  return (
    <section className="Day">
      <h2>Day </h2> 
      {props.person.day}
    </section>
  )
}
export default Day;