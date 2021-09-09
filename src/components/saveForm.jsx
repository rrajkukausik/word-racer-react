import Score from "../components/scorebar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { GameContext } from "../context";
import { useContext, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(26),
    color: "secondary",
  },
  field: {
    width: "500px",
    height: "50px",
    color: "primary",
  },
}));

//This component saves the score and level of the user with User's name and email.
export default function SaveForm() {
  const { score, level } = useContext(GameContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();
//This function changes the state of the username.
  const handleUsername = (e) => {
    setName(e.target.value);
  };
//This function changes the state of the email.
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //This functions sends post request to the Backend and saves on the database.
  const handleSave = async () => {
    const data = { name, email, score, level };
    await axios
      .post("http://localhost:4000/api/player/", data)
      .then((res) => {
        if (res.data.success) {
          insertSavedText();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //This function sets innertext of the div to show message after saved in database. 
  const insertSavedText = () => {
    document.getElementById("saved-text").innerHTML = "Your score is saved!!   📩";
  };

  return (
    <div className="game-container">
      <Score />
      <div>
        <form className={classes.form} className="saveform-box" noValidate>
          <div>
            <TextField
              className={classes.field}
              onChange={handleUsername}
              variant="outlined"
              margin="normal"
              required
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
          </div>

          <div>
            <TextField
              className={classes.field}
              onChange={handleEmail}
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
          </div>
        </form>
      </div>
      <div id="saved-text"></div>

      <button className="savescorefinal-button" onClick={handleSave}>
        Save Score📩
      </button>

      <Link to="/game">
        <button className="backform-button"> Go Back 👈</button>
      </Link>
    </div>
  );
}
