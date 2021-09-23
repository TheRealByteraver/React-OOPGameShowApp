import React, { useContext } from 'react';
import { Context } from './context';

export default function Phrase() {

  const context = useContext(Context);

  function getWordList(phrase) {
    const wordList = [];
    let word = '';
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] !== ' ') {
        word += phrase[i];
      } else {
        wordList.push(word);
        word = '';
      }
    }
    // push last word
    if (word.length > 0) {
      wordList.push(word);
    }
    return wordList;
  }

  return (
    <div id="phrase" className="section">
      <ul>
        {
          getWordList(context.gameData.activePhrase).map((word, wordIndex) => {
            return (
              <span key={wordIndex} style={{display: "inline-block"}}>
                {
                  word.split('').map((letter, letterIndex) => {
                    const showHideClass = 
                      context.gameData.clickedLetters.includes(letter) 
                        ? 'show' 
                        : 'hide';
                    return (
                      <li 
                        key={letterIndex} 
                        className={`letter ${letter} ${showHideClass}`}>
                        {letter}
                      </li>
                    );
                  })
                }
                <li key={word.length} className="space">{' '}</li>
              </span> 
            )}
          )
        }
      </ul>
    </div>
  );
}