import React from "react";
import Treat from "../../Images/treat.svg";

export default function CatTreat(props) {
  const style = {
    left: `${props.position[0]}%`,
    top: `${props.position[1]}%`
  };
  return (
    <img className="catTreat" src={Treat} alt="fish treat" style={style} />
  );
}
