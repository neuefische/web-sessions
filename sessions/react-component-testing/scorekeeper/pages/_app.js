import GlobalStyle from "../styles";
import { useState } from "react";
import PAGES from "../assets/pages";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  const [currentPage, setCurrentPage] = useState(PAGES.PLAY);
  const [history, setHistory] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        players={players}
        nameOfGame={nameOfGame}
        currentPage={currentPage}
        history={history}
        onCreateGame={createGame}
        onEndGame={endGame}
        onResetScores={resetScores}
        onIncreasePlayerScore={increasePlayerScore}
        onDecreasePlayerScore={decreasePlayerScore}
      />
    </>
  );

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame);
    setPlayers(playerNames.map((name) => ({ name, score: 0, id: nanoid() })));
    setCurrentPage(PAGES.GAME);
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: nanoid() }, ...history]);
    setPlayers([]);
    setNameOfGame("");
    setCurrentPage(PAGES.PLAY);
  }

  function resetScores() {
    setPlayers(players.map((player) => ({ ...player, score: 0 })));
  }

  function increasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}