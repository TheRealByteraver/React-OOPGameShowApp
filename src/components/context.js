import React, { useState } from 'react';
import phrases from '../phrasedata';

export const Context = React.createContext();

export function Provider(props) {

  const gameStates = {
    ready: "ready",
    playing: "playing",
    gameWon: "gameWon",
    gameLost: "gameLost"
  };

  const [gameState, setGameState] = useState(gameStates.ready);

  function updateGameState(state) {
    if (state in gameStates) {
      setGameState(state);
    } else {
      console.log('Tried to set illegal state', state, 
        'inside updateGameState(state) in context.js');
    }
  }

  const [gameData, setGameData] = useState({
    missed: 0,
    maxLives: 5,
    activePhrase: '', 
    nrOfLetters: 0,
    clickedLetters: []
  });

  function startGame() {
    updateGameState(gameStates.playing);

    // Get a random new phrase from phrasedata.js
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const newPhrase = phrases[randomIndex];

    // convert the phrase to lowercase for easier checking
    const activePhrase = newPhrase.toLowerCase();

    // the player can't check for spaces so we trim them out as
    // well as recurring characters and count what's left:
    const activePhraseTrimmed = activePhrase.replace(/\s+/g, '');
    const nrOfLetters = [...new Set(activePhraseTrimmed)].length;

    setGameData({
      missed: 0,
      maxLives: 5,
      activePhrase,
      nrOfLetters,
      clickedLetters: []  
    });
  }

  function playLetter(letter) {
    if (gameState !== gameStates.playing) {
      return false; // nothing to do here
    }
    if (gameData.activePhrase.includes(letter)) {
      // add the letter to the list of played letters
      setGameData(prevState => {
        const clickedLetters = [...prevState.clickedLetters, letter];
        if (clickedLetters.length >= prevState.nrOfLetters) {
          updateGameState(gameStates.gameWon);
        }
        return {
          ...prevState,
          clickedLetters
        }
      });
      return true;
    } else {
      // remove a life if the letter is not in the phrase
      setGameData(prevState => {
        const missed = prevState.missed + 1;
        if (missed >= gameData.maxLives) {
          updateGameState(gameStates.gameLost);
        }
        return {
          ...prevState,
          missed      
        }
      });
      return false;
    }
  }

  return (
    <Context.Provider value={{
        gameStates,
        gameState,
        gameData,
        actions: {
          startGame,
          playLetter,
        }
      }
    }>
      { props.children }
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;