import React, { Component } from "react";
import rockcat from "../../Images/Rocky.svg";
import "./SimpleGame.css"

export default class Box extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        return (
            <div
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width+10,
                    height: height,
                    //backgroundColor:this.props.color
                }}>
                <img class="cat" src={rockcat} alt="cat"></img>
                </div>
    );
  }
}