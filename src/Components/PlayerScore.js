import React, { useContext } from "react";
import ControllerContext from "../Context/Context";

export default function PlayerScore({ player, turn }) {
  const gameContext = useContext(ControllerContext);
  return (
    <div className={`item player ${!turn ? "turn" : ""}`}>
      <div>{`${player}`}</div>
      <div>{`Score: ${
        player === "Player 1" ? gameContext.score[0] : gameContext.score[1]
      }`}</div>
    </div>
  );
}
