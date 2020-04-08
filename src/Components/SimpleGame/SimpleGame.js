import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import  Box  from "./Box";
import  Wall  from "./Wall";
import { MoveBox } from "./boxMove"
//import {generatePipes} from "./Pipes"
import Matter from "matter-js";
import Constants from './Constants';


 
export default class SimpleGame extends Component {
  constructor(props){
    super(props);

    this.state = {
        running: true,
        height:0,
        width:0,
    };
    this.gameEngine = null;
    this.entities =  this.setupWorld();
}
randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


generatePipes = () => {
  let topPipeHeight = this.randomBetween(100, (this.props.height / 2) - 100);
  console.log(this.props);
  let bottomPipeHeight = this.props.height - topPipeHeight - Constants.GAP_SIZE;

  let sizes = [topPipeHeight, bottomPipeHeight]

  if (Math.random() < 0.5) {
      sizes = sizes.reverse();
  }
  return sizes;
}


setupWorld = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.6;

  let box = Matter.Bodies.rectangle( this.props.width / 4, this.props.height / 2, 50, 50);
  let floor = Matter.Bodies.rectangle( this.props.width / 2, this.props.height - 25, this.props.width, 50, { isStatic: true });
  let ceiling = Matter.Bodies.rectangle( this.props.width / 2, 25, this.props.width, 50, { isStatic: true });

  let [pipe1Height, pipe2Height] = this.generatePipes();

  let pipe1 = Matter.Bodies.rectangle( this.props.width - (Constants.PIPE_WIDTH / 2), pipe1Height / 2, Constants.PIPE_WIDTH, pipe1Height, { isStatic: true });
  let pipe2 = Matter.Bodies.rectangle( this.props.width - (Constants.PIPE_WIDTH / 2), this.props.height - (pipe2Height / 2), Constants.PIPE_WIDTH, pipe2Height, { isStatic: true });

  let [pipe3Height, pipe4Height] = this.generatePipes();

  let pipe3 = Matter.Bodies.rectangle( this.props.width * 2 - (Constants.PIPE_WIDTH / 2), pipe3Height / 2, Constants.PIPE_WIDTH, pipe3Height, { isStatic: true });
  let pipe4 = Matter.Bodies.rectangle( this.props.width * 2 - (Constants.PIPE_WIDTH / 2), this.props.height - (pipe4Height / 2), Constants.PIPE_WIDTH, pipe4Height, { isStatic: true });


  Matter.World.add(world, [box, floor, ceiling, pipe1, pipe2, pipe3, pipe4]);
  Matter.Events.on(engine, 'collisionStart', (event) => {
    var pairs = event.pairs;
    this.gameEngine.dispatch({ type: "game-over"});
  });
  

  return {
      physics: { engine: engine, world: world },
      box: { body: box, size: [50, 50], color: 'red', renderer: Box},
      floor: { body: floor, size: [this.props.width, 50], color: "green", renderer: Wall },
      ceiling: { body: ceiling, size: [this.props.width, 50], color: "green", renderer: Wall },
      pipe1: { body: pipe1, size: [Constants.PIPE_WIDTH, pipe1Height], color: "green", renderer: Wall },
      pipe2: { body: pipe2, size: [Constants.PIPE_WIDTH, pipe2Height], color: "green", renderer: Wall },
      pipe3: { body: pipe3, size: [Constants.PIPE_WIDTH, pipe3Height], color: "green", renderer: Wall },
      pipe4: { body: pipe4, size: [Constants.PIPE_WIDTH, pipe4Height], color: "green", renderer: Wall }
  }
}
onEvent = (e) => {
  if (e.type === "game-over"){
      //Alert.alert("Game Over");
      this.setState({
          running: false
      });
  }
}

reset = () => {
  this.gameEngine.swap(this.setupWorld());
  this.setState({
      running: true
  });
}

  render() {
    return (
      <div style={
        {flex: 1,
        backgroundColor: 'yellow',
        z:1,
      }}
        ref={(inner)=>{this.inner=inner}}
        >
          
      <GameEngine
         ref={(ref) => { this.gameEngine = ref; }}
         style={{
          position: 'absolute', 
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          z:0,
          }}
          systems={[MoveBox]}
          onEvent={this.onEvent}
         running={this.state.running}
         entities={this.entities}>
      </GameEngine>
      {!this.state.running && <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
      }} 
    onClick={this.reset}>
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <p style={{
        color: 'red',
        fontSize: 50
    }}>Game Over
    </p>
      </div>
    </div>}
  </div>
    );
  }
}
