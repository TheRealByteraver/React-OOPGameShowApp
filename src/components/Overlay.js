import React, { useContext } from 'react';
import { Context } from './context';

export default function Overlay() {

  const context = useContext(Context);

  function handleClick() {
    // remove the overlay with the "Start Game" button
    document.getElementById('overlay').style.display = 'none';
    context.actions.startGame();
  }

  let message;
  let overlayClass;
  switch (context.gameState) {
    case context.gameStates.gameWon:
      document.getElementById('overlay').style.display = '';
      overlayClass = 'win';
      message = 'You won the game!';
      break;
    case context.gameStates.gameLost:
      document.getElementById('overlay').style.display = '';
      overlayClass = 'lose';
      message = 'You lost, better luck next time!';
      break;
    default:
      overlayClass = 'start';
      message = '';
      break;
  }

  return (
    <div id="overlay" className={overlayClass}>
      <h2 className="title">Phrase Hunter</h2>
      <h1 id="game-over-message">{message}</h1>
      <button id="btn__reset" onClick={handleClick}>Start Game</button>
    </div>
  );
}