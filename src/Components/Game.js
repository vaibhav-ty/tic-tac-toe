import React, { useState } from "react";
import "../Styles/game.css";
import PlayerScore from "./PlayerScore";
import Board from "./Board";
import Controller from "./Controller";
import ControllerContext from "../Context/Context";

export default function Game() {
  const [board, setBoard] = useState([[], [], []]);
  const [player, setPlayer] = useState(0);
  const [winner, setWinner] = useState();
  const [score, setScore] = useState({ 0: 0, 1: 0 });
  const [disableBoard, setDisableBoard] = useState(false);

  const handleClick = (row, column) => {
    if (disableBoard) {
      return;
    }
    const newBoard = board.slice();
    if (newBoard[row][column] === undefined) {
      newBoard[row][column] = player;
      setBoard(newBoard);
      if (checkRow() || checkColumn() || checkDiagonal()) {
        setWinner(player);
        let scr = { ...score };
        scr[player] = scr[player] + 1;
        debugger;
        setScore(scr);
        setDisableBoard(true);
      } else {
        setPlayer(1 - player);
      }
    }
  };

  const bindSymbol = (row, column) => {
    if (board[row][column] === 0) {
      return <span>&#x2717;</span>;
    } else if (board[row][column] === 1) {
      return <span>O</span>;
    }
  };

  const checkRow = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== undefined &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return true;
      }
    }
    return false;
  };

  const checkColumn = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== undefined &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return true;
      }
    }
    return false;
  };

  const checkDiagonal = () => {
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== undefined
    ) {
      return true;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== undefined
    ) {
      return true;
    }
    return false;
  };

  const newGame = () => {
    setBoard([[], [], []]);
    setDisableBoard(false);
    setPlayer(0);
  };

  const resetScores = () => {
    setScore({ 0: 0, 1: 0 });
  };

  return (
    <ControllerContext.Provider
      value={{ handleClick, bindSymbol, newGame, resetScores, winner, score }}
    >      
      <div className="gameContainer">
        <PlayerScore player={"Player 1"} turn={player} />
        <Board />
        <PlayerScore player={"Player 2"} turn={1 - player} />
      </div>

      <div className="controller">
        <Controller />
      </div>
    </ControllerContext.Provider>
  );
}
