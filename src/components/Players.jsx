import { useState } from "react";

export default function Players({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevEditing) => !prevEditing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playername = <span classname="player">{initialName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playername = (
      <input type="text" required Value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playername}

        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption} </button>
    </li>
  );
}
