import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "../../renderers/renderers";
import { MoveBox } from "../../systems/systems"
 
export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 100,  y: 100, renderer: <Box />},
          box2 : {x:150,y:100, renderer: <Box />}
        }}>
 
      </GameEngine>
    );
  }
}