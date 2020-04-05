import React from "react";
export default function CatSize(props) {
  // Print out each cat length and position it
  return (
    <div>
      {props.catLength.map((length, i) => {
        const style = { left: `${length[0]}%`, top: `${length[1]}%` };
        return <div className="catLength" key={"cat" + i} style={style}></div>;
      })}
    </div>
  );
}
