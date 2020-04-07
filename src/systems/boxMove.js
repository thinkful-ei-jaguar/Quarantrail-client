import Matter from "matter-js";
const MoveBox = (entities, { input,time }) => {
  let engine = entities.physics.engine;
  let box = entities.box.body;
  Matter.Engine.update(engine, time.delta);
  const { payload } = input.find(x => x.name === "onMouseDown") || {};
  if (payload) {
    Matter.Body.applyForce( box, box.position, {x:0.00, y: -0.10});
  }
 
  return entities;
  };
 
  export { MoveBox };