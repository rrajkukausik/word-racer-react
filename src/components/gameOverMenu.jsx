import React, { useContext } from "react";
import Score from "../components/scorebar";
import { Link } from "react-router-dom";
import { GameContext } from "../context";

//This component renders the game over page.It has funtionalities like
//Playing game again, seeing the top scores and leaderboard and also to
//save the usewr's score to the backend.
export default function Retry() {
  const { setScore, setLevel, setMultiplier, setActive } =
    useContext(GameContext);
//This function resets all the game data to the previous starting state ,
// when the user clicks on PLAY AGAIN button.
  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setMultiplier(1);
    setActive(true);
  };
  return (
    <div className="game-container">
      <Score />
      <h1 className="game-over">Game Over !!! 😿 Stack is Full 😢</h1>
      <Link to="/game">
        <button className="playagain-button" onClick={resetGame}>
          Play Again 🔁
        </button>
      </Link>
      <Link to="/savescore">
        <button className="savescore-button">Save Score📩</button>
      </Link>
      <Link to="/highscores">
        <button className="highscore-button">Top Scores 🎯</button>
      </Link>
      <Link to="/allscores">
        <button className="allscore-button">Leaderboard 📖</button>
      </Link>
    </div>
  );
}
