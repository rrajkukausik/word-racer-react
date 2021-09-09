import React, { useContext, useEffect } from "react";
import { GameContext } from "../context";

export default function WordStack(props) {
  const { setMultiplier } = useContext(GameContext);
  useEffect(() => {
    if (props.stackWords.length === 7) {
      setMultiplier(1);
      props.endGame();
    }
  }, [props.stackWords]);
  return (
    <div className="stack-box">
      {props.stackWords.map((word,index) => (
        <span className={index === props.stackWords.length - 1 ? "stack-word" : "stack-word-new"}>
          {word.word}
        </span>
      ))}
    </div>
  );
}
