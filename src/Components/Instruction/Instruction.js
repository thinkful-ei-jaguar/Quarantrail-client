import React from "react";
import "./Instruction.css";

function Instruction() {
  return (
    <section className="instruction-section">
      <div className="instruction">
        <p>
          You have two gauges: boredom and chance of infection, if either of
          these get too high you lose. It is your job to balance these to make
          sure your character survives. Boredom can be reduced by doing
          activities but with every activity you do you risk being infected.
          You'll also need to keep track of, and maintain, your supply of food
          and toilet paper, but you may not want to get too much...
        </p>
      </div>
    </section>
  );
}
export default Instruction;
