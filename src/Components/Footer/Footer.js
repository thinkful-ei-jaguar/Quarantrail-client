import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <p className="footer-item" onClick={props.toggleLeaderBoard}>
        LeaderBoard
      </p>
      <p className="footer-item" onClick={props.toggleInstruction}>
        Instruction
      </p>
    </footer>
  );
}
export default Footer;
