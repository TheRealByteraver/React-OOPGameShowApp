import React, { useContext } from 'react';
import { Context } from './context';

export default function Scoreboard() {

  const context = useContext(Context);

  function createHeart(alive, index) {
    const filename = `images/${alive ? 'live' : 'lost'}Heart.png`;
    return (
      <li key={index} className="tries">
        <img src={filename} alt="Heart Icon" height="35" width="30" />
      </li>
    );
  }

  function createScoreboard() {
    const livesLost = context.gameData.missed;
    const livesLeft = context.gameData.maxLives - livesLost;

    const liveValues = [];
    for (let i = 0; i < livesLeft; i++) {
      liveValues.push(true);
    }
    for (let i = 0; i < livesLost; i++) {
      liveValues.push(false);
    }
    return liveValues;
  }

  return (
    <div id="scoreboard" className="section">
      <ol>
        {
          createScoreboard().map((alive, index) => createHeart(alive, index))
        }
      </ol>
    </div>
  );
}