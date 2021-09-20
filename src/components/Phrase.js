import React, { useContext } from 'react';
import { Context } from './context';

export default function Phrase() {

  const context = useContext(Context);

  return (
    <div id="phrase" className="section">
      <ul>
        {
          context.gameData.activePhrase.split('').map((letter, index) => {
            let classList;
            if (letter !== ' ') {
              const showHideClass = 
                context.gameData.clickedLetters.includes(letter) 
                  ? 'show' : 'hide';              
              classList = `letter ${letter} ${showHideClass}`;
            } else {
              classList = 'space';
            }
            return (
              <li key={index} className={classList}>
                {letter}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}