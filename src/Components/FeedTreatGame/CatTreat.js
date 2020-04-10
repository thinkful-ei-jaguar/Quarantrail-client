import React from "react";
import Treat from "../../Images/treat.svg";

export default function CatTreat(props) {
  const style = {
    left: `${props.position[0]}%`,
    top: `${props.position[1]}%`
  };

  const classification =
    props.finished || props.instruction ? "hide" : "catTreat";

  return (
    <img
      className={classification}
      src={Treat}
      alt="fish treat"
      style={style}
    />
  );
}
