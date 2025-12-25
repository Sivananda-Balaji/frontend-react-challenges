import { useState } from "react";
import style from "./TicTacToe.module.css";
const initialGrid = Array(3 * 3).fill(null);
const TicTacToe = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameStatus, setGameStatus] = useState("Playing");
  const [points, setPoints] = useState({ X: 0, O: 0, D: 0 });

  const checkWinner = (grid) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      const valueA = grid[a];
      const valueB = grid[b];
      const valueC = grid[c];
      if (valueA !== null && valueA === valueB && valueB === valueC) {
        return valueA;
      }
    }
    return null;
  };
  const checkDraw = (grid, winner) => {
    if (winner !== null) {
      return false;
    }
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === null) {
        return false;
      }
    }
    return true;
  };
  const handleGridClick = (indexValue) => {
    if (gameStatus !== "Playing" || grid[indexValue] !== null) {
      return;
    }
    const newGrid = grid.map((item, index) => {
      if (index === indexValue) {
        if (item === null) {
          return currentPlayer;
        }
      }
      return item;
    });
    setGrid(newGrid);
    const result = checkWinner(newGrid);
    const drawResult = checkDraw(newGrid, result);
    if (result !== null && drawResult === false) {
      setGameStatus(`${result} Wins`);
      setPoints((prev) => ({ ...prev, [result]: prev[result] + 1 }));
    } else if (drawResult === true && result === null) {
      setGameStatus("Match Draw");
      setPoints((prev) => ({ ...prev, D: prev["D"] + 1 }));
    } else {
      const player = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(player);
    }
  };
  const handleReMatch = () => {
    setCurrentPlayer("X");
    setGameStatus("Playing");
    setGrid(initialGrid);
  };
  return (
    <div className={style.container}>
      <div className={style.GameStatus}>
        <h3>Status: {gameStatus}</h3>
      </div>
      <div className={style.GamePoints}>
        <div>
          <h3>X</h3>
          <h3>{points.X} Wins</h3>
        </div>
        <div>
          <h3>O</h3>
          <h3>{points.O} Wins</h3>
        </div>
        <div>
          <h3>=</h3>
          <h3>{points.D} Draws</h3>
        </div>
      </div>
      <div className={style.gridContainer}>
        {grid.map((item, index) => {
          return (
            <div
              key={index}
              className={style.gridCell}
              onClick={() => handleGridClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={style.buttonSection}>
        <button onClick={handleReMatch}>Rematch</button>
      </div>
    </div>
  );
};

export default TicTacToe;
