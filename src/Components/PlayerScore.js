import React from "react";

export default function PlayerScore({ player, score, turn }) {
  return (
    <div className={`item player ${!turn ? "turn" : ""}`}>
      <div>{`${player}`}</div>
      <div>{`Score: ${score}`}</div>
    </div>
  );
}
