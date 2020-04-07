import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import  Box  from "../../renderers/Box";
import  Wall  from "../../renderers/Wall";
import { MoveBox } from "../../systems/boxMove"
import Matter from "matter-js";
 
export default class SimpleGame extends Component {
  constructor(props){
    super(props);

    this.state = {
        running: true
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
}

setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    let floor =Matter.Bodies.rectangle( 300, 400, 600, 50, { isStatic: true });
    let ceiling =Matter.Bodies.rectangle( 300, 0, 600, 50, { isStatic: true });
    //let rand1= Math.floor(Math.random() * (max - min + 1) + min);
    // let plat1 =
    // let plat2 =


    let box = Matter.Bodies.rectangle( 100, 100, 50, 50);

    Matter.World.add(world, [box, floor, ceiling]);


    return {
        physics: { engine: engine, world: world },
        box: { body: box, size: [50, 50], color: 'red', renderer: Box},
        floor: { body: floor, size: [800, 50], color: "green", renderer: Wall },
        ceiling: { body: ceiling, size: [800, 50], color: "green", renderer: Wall },
      }
}

  render() {
    return (
      <div style={
        {flex: 1,
        backgroundColor: 'blue'}
        }>
      <GameEngine
         ref={(ref) => { this.gameEngine = ref; }}
         style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          }}
          systems={[MoveBox]}
         running={this.state.running}
         entities={this.entities}>
      </GameEngine>
      </div>
    );
  }
}
