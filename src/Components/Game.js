import React, { useState } from "react";
import "../Styles/game.css";
import PlayerScore from "./PlayerScore";
import Board from "./Board";
import Controller from "./Controller";
import ControllerContext from '../Context/Context';

export default function Game() {
  
  const [board, setBoard] = useState([[], [], []]);
  const [player, setPlayer] = useState(0);
  const handleClick = (row, column) => {
    const newBoard = board.slice();
    if (newBoard[row][column] === undefined) {
      newBoard[row][column] = player;
      setPlayer(1 - player);
      setBoard(newBoard);
    }
    console.log(newBoard);
  };

  const bindSymbol = (row, column) => {
    if(board[row][column] == 0){
      return <span>&#x2717;</span>
    } else if(board[row][column] == 1){
      return <span>O</span>;
    }
  }

  const newGame = () => setBoard([[], [], []]);

  return (
    
    <ControllerContext.Provider value={{handleClick, bindSymbol, newGame}}>
      <div className="gameContainer">
        <PlayerScore player={"Player 1"} score={0} turn={player} />
        <Board />
        <PlayerScore player={"Player 2"} score={0} turn={1 - player} />
      </div>
      
      <div className="controller">
        <Controller />
      </div>
      </ControllerContext.Provider>
    
  );
}
