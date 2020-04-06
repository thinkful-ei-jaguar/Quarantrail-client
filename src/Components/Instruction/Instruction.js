import React from "react";
import "./Instruction.css";

function Instruction() {
  return (
    <section className="instruction-section">
      <div className="instruction">
        <p>
        You have two gauges: chance of infection and boredom, after everyday you have a chance of catching the virus based on the percent you have gained, you also have a chance of losing if your boredom bar gets filled. It is your job to balance these to make sure your character survives. Boredom can be reduced by doing activities, you can do 3 a day, but with every activity you do you risk being infected. You'll also need to keep track of, and maintain, your supply of food and toilet paper, but you may not want to get too much...
        </p>
      </div>
    </section>
  );
}
export default Instruction;
