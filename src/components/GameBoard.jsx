import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onPlayerTurn, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // Create a deep copy
      const updatedBoard = prevGameBoard.map((row) => [...row]);

      // Place symbol only if the cell is empty
      if (!updatedBoard[rowIndex][colIndex]) {
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      } else {
        return prevGameBoard; // Prevent state change if cell is occupied
      }

      return updatedBoard;
    });

    // Call the function passed from App to switch players
    onPlayerTurn();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>
                  {playerSymbol || "-"}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
