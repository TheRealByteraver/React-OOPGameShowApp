import React, { useContext } from 'react';
import { Context } from './context';

export default function Qwerty() {

  const context = useContext(Context);

  function handleClick(event) {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
      button.setAttribute('disabled', '');
      const goodLetter = context.actions.playLetter(button.innerHTML);
      button.classList.add(goodLetter ? 'chosen' : 'wrong');
    }
  }

  function resetKeyboard() {
    const divQwerty = document.getElementById('qwerty');
    if (divQwerty) {
      const buttons = divQwerty.getElementsByTagName('button');
      Array.from(buttons).forEach(button => {
        button.removeAttribute('disabled');
        button.className = 'key';
      });        
    }
  }

  if (context.gameData.clickedLetters.length === 0) {
    // console.log('keyboard was reset');
    resetKeyboard();
  }

  return (
    <div id="qwerty" className="section" onClick={handleClick}>
      <div className="keyrow">
        <button className="key">q</button>
        <button className="key">w</button>
        <button className="key">e</button>
        <button className="key">r</button>
        <button className="key">t</button>
        <button className="key">y</button>
        <button className="key">u</button>
        <button className="key">i</button>
        <button className="key">o</button>
        <button className="key">p</button>
      </div>

      <div className="keyrow">
        <button className="key">a</button>
        <button className="key">s</button>
        <button className="key">d</button>
        <button className="key">f</button>
        <button className="key">g</button>
        <button className="key">h</button>
        <button className="key">j</button>
        <button className="key">k</button>
        <button className="key">l</button>
      </div>

      <div className="keyrow">
        <button className="key">z</button>
        <button className="key">x</button>
        <button className="key">c</button>
        <button className="key">v</button>
        <button className="key">b</button>
        <button className="key">n</button>
        <button className="key">m</button>
      </div>
    </div>
  );
}