import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="Footer">
      <span onClick={props.toggleLeaderBoard}>LeaderBoard</span>
      <span onClick={props.toggleInstruction}>Instruction</span>
    </div>
  );
}
export default Footer;
