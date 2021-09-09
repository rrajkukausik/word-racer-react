import React, { useContext } from "react";
import { GameContext } from "../context";

// This component shows the score at top of the Applicatioon.
export default function Score() {
  const { score, level, multiplier } = useContext(GameContext);

  return (
    <div className="scorebar">
      <h1>Score:{score}</h1>
      <h1>Level: {level}</h1>
      <h1>Multiplier: {multiplier.toFixed(0)}X</h1>
    </div>
  );
}
