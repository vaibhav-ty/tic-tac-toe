import React, { useContext } from "react";
import ControllerContext from "../Context/Context";
import "../Styles/game.css";

export default function Board() {
  const gameContext = useContext(ControllerContext);
  return (
    <div className="item table_wrapper">
      <table>
        <tbody>
          <tr>
            <td disabled={true} onClick={() => gameContext.handleClick(0, 0)}>
              {gameContext.bindSymbol(0, 0)}
            </td>
            <td onClick={() => gameContext.handleClick(0, 1)}>
              {gameContext.bindSymbol(0, 1)}
            </td>
            <td onClick={() => gameContext.handleClick(0, 2)}>
              {gameContext.bindSymbol(0, 2)}
            </td>
          </tr>
          <tr>
            <td onClick={() => gameContext.handleClick(1, 0)}>
              {gameContext.bindSymbol(1, 0)}
            </td>
            <td onClick={() => gameContext.handleClick(1, 1)}>
              {gameContext.bindSymbol(1, 1)}
            </td>
            <td onClick={() => gameContext.handleClick(1, 2)}>
              {gameContext.bindSymbol(1, 2)}
            </td>
          </tr>
          <tr>
            <td onClick={() => gameContext.handleClick(2, 0)}>
              {gameContext.bindSymbol(2, 0)}
            </td>
            <td onClick={() => gameContext.handleClick(2, 1)}>
              {gameContext.bindSymbol(2, 1)}
            </td>
            <td onClick={() => gameContext.handleClick(2, 2)}>
              {gameContext.bindSymbol(2, 2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
