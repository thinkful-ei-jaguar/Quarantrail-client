import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className='footer-item' onClick={props.toggleLeaderBoard}><p>LeaderBoard</p></div>
      <div className='footer-item' onClick={props.toggleInstruction}><p>Instruction</p></div>
    </footer>
  );
}
export default Footer;
