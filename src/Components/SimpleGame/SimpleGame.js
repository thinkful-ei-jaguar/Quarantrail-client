import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "../../renderers/Box";
import { MoveBox } from "../../systems/boxMove"
//import Matter from "matter-js";
 
export default class SimpleGame extends Component {

  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: {backgroundColor:"red", x: 100,  y: 100, renderer: <Box/>},
          box2: {backgroundColor:"yellow",x: 150,  y: 100, renderer: <Box />},
          
        }}>
 
      </GameEngine>
    );
  }
}