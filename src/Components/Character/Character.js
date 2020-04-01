import React from "react";
import femaleChar from "../../Images/FemaleChar.svg";
import "./Character.css";

export default function Character() {
  return (
    <div className="character">
      <img src={femaleChar} alt="character" />
    </div>
  );
}
