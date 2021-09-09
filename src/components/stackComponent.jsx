import { useEffect, useContext,useState } from "react";
import { GameContext } from "../context";

//This component maps on the word Array to display words on the word stack.
const StackComponent = (props) => {
  const { setMultiplier } = useContext(GameContext);
  const [len, setLen] = useState(0);
  useEffect(() => {
    if (props.stackWords.length === 8) {
      setMultiplier(1);
      setLen(props.stackWords.length - 1)
      props.endGame();
    }
  }, [props.stackedWords]);
  return (
    <div className="stack-box">
      {props.stackWords.map((word, index) => {
        return (
          <div
            className={
              index === len
                ? "stack-word-new"
                : "stack-word"
            }
          >
            <p>{word.word}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StackComponent;
