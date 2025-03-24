import { useState } from "react";
import Player from "./components/Players.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerTurn() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="gamecontainer">
        <ol id="players">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onPlayerTurn={handlePlayerTurn} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
