import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  header: {
    position: "sticky",
    top: 0,
    background: "#565DFA",
    color: "white",
  },
  body: {
    color: "#565DFA",
  },
  paper: {
    marginLeft: theme.spacing(2.5),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Api = "http://localhost:4000/api/";
//This Component shows leaderboard on the Application.
const ScoreList = () => {
  const classes = useStyles();

  const [Score, setScore] = useState([]);

  useEffect(() => {
    //This function sends GET request to the APi
    const getList = async () => {
      try {
        const response = await axios.get(Api + "player/all");
        setScore(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getList();
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  let average = 0;
  // calculation of average
  if (Score.players) {
    for (let i = 0; i < Score.players.length; i++) {
      average = average + Score.players[i].score;
    }

    average = (average / Score.players.length).toFixed(0);
  }

  return (
    <div className="highscores-container">
      <div className="highscores-box">
        <h1 className="highscores-header">👌 LeaderBoard 👏</h1>
        <div className="allstatistics">
          <h1>Total Games Played: {Score ? Score.total : " "}</h1>
          <h1>
            Max Level Reached: {Score.players ? Score.players[0].level : " "}
          </h1>
          <h1>Average Score: {Score.players ? average : " "}</h1>
        </div>
        <Paper
          className={fixedHeightPaper}
          style={{ height: "380px", width: "660px" }}
        >
          {Score.success === true && (
            <TableContainer
              style={{ backgroundColor: "#DBFFFF" }}
              component={Paper}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.header}>Position</TableCell>
                    <TableCell className={classes.header}>
                      Player Name
                    </TableCell>
                    <TableCell className={classes.header}>
                      Player Email
                    </TableCell>
                    <TableCell className={classes.header}>Score</TableCell>
                    <TableCell className={classes.header}>Max Level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Score.players.map((player, index) => (
                    <TableRow key={player._id}>
                      <TableCell
                        className={classes.body}
                        component="th"
                        scope="row"
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell className={classes.body}>
                        {player.name}
                      </TableCell>
                      <TableCell className={classes.body}>
                        {player.email}
                      </TableCell>
                      <TableCell className={classes.body}>
                        {player.score}
                      </TableCell>
                      <TableCell className={classes.body}>
                        {player.level}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
      <Link to="/game">
        <button className="highscores-button"> 👈 Go Back</button>
      </Link>
    </div>
  );
};
export default ScoreList;
