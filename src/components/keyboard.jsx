import React from "react";
import KeyboardKey from "./keyboardKey";
import { row_qwerty, row_asdf, row_zxcv } from "../utils/data";

//This component is the layout of the keyboard present in the Game.
//Here it iterates over 3 arrays to generate a keyboard like layout to generate feedback mechanism functionality.
const Keyboard = () => {
  return (
    <div className="keyboard">
      <div>
        {row_qwerty.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>

      <div>
        {row_asdf.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>
      <div>
        {row_zxcv.map((key, index) => (
          <KeyboardKey data={key} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
