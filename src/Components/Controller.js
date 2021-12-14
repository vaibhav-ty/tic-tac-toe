import React, { useContext } from "react";
import ControllerContext from "../Context/Context";

export default function Controller() {
  const gameContext = useContext(ControllerContext);
  return (
    <>
      <button onClick={() => gameContext.newGame()}>New Game</button>
      <button>Reset Scores</button>
    </>
  );
}
