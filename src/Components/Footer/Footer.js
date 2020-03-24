import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <span onClick={props.toggleLeaderBoard}>LeaderBoard</span>
      <span onClick={props.toggleInstruction}>Instruction</span>
    </footer>
  );
}
export default Footer;
