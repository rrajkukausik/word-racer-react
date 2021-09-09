import "./App.css";
import "./scss/Main.css";
import Instructions from "./components/instructions";
import TopScoreList from "./components/topScoreList";
import ScoreList from "./components/scoresList";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Game from "./components/mainGame";
import RetryGame from "./components/gameOverMenu";
import SaveForm from "./components/saveForm";
import { GameContext } from "./context";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [isActive, setActive] = useState(true);
  return (
    <div className="App">
      <Router>
        <GameContext.Provider
          value={{
            isActive,
            setActive,
            score,
            setScore,
            level,
            setLevel,
            multiplier,
            setMultiplier,
          }}
        >
          <Switch>
            <Route exact path="/" component={Instructions}></Route>
            {/* <Route exact path="/game" component={Game}></Route>
            <Route exact path="/retry" component={RetryGame}></Route> */}
            <Route exact path="/game">
              {isActive ? <Game /> : <RetryGame />}
            </Route>
            <Route path="/savescore" component={SaveForm}></Route>
            <Route path="/highscores" component={TopScoreList}></Route>
            <Route path="/allscores" component={ScoreList}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </GameContext.Provider>
      </Router>
    </div>
  );
}

export default App;
