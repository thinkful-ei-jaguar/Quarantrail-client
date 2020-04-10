import Matter from "matter-js";
import Constants from "./Constants";
const MoveBox = (entities, { input, time }) => {
  let engine = entities.physics.engine;
  let box = entities.box.body;
  const { payload } = input.find(x => x.name === "onMouseDown") || {};
  if (payload) {
    Matter.Body.applyForce(box, box.position, { x: 0.0, y: -0.1 });
  }
  for (let i = 1; i <= 4; i++) {
    if (entities["pipe" + i].body.position.x <= -2.5 * Constants.PIPE_WIDTH) {
      Matter.Body.setPosition(entities["pipe" + i].body, {
        x: Constants.MAX_WIDTH * 3.5,
        y: entities["pipe" + i].body.position.y
      });
    } else {
      Matter.Body.translate(entities["pipe" + i].body, { x: -1, y: 0 });
    }
  }
  if (entities["npipe"].body.position.x <= -2 * Constants.PIPE_WIDTH) {
    Matter.Body.setPosition(entities["npipe"].body, {
      x: Constants.MAX_WIDTH * 3.5,
      y: entities["npipe"].body.position.y
    });
  } else {
    Matter.Body.translate(entities["npipe"].body, { x: -1, y: 0 });
  }
  if (entities["lpipe"].body.position.x <= -2 * Constants.PIPE_WIDTH) {
    Matter.Body.setPosition(entities["lpipe"].body, {
      x: Constants.MAX_WIDTH * 3.5,
      y: entities["lpipe"].body.position.y
    });
  } else {
    Matter.Body.translate(entities["lpipe"].body, { x: -1, y: 0 });
  }
  if (entities["kpipe"].body.position.x <= -2 * Constants.PIPE_WIDTH) {
    Matter.Body.setPosition(entities["kpipe"].body, {
      x: Constants.MAX_WIDTH * 3.5,
      y: entities["kpipe"].body.position.y
    });
  } else {
    Matter.Body.translate(entities["kpipe"].body, { x: -1, y: 0 });
  }
  if (entities["mpipe"].body.position.x <= -2 * Constants.PIPE_WIDTH) {
    Matter.Body.setPosition(entities["mpipe"].body, {
      x: Constants.MAX_WIDTH * 3.5,
      y: entities["mpipe"].body.position.y
    });
  } else {
    Matter.Body.translate(entities["mpipe"].body, { x: -1, y: 0 });
  }

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export { MoveBox };
