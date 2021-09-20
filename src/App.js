import React from 'react';

// import './css/styles.css';
// import './css/animate.css';
import { Provider } from './components/context';
import Overlay from './components/Overlay';
import Banner from './components/Banner';
import Phrase from './components/Phrase';
import Qwerty from './components/Qwerty';
import Scoreboard from './components/Scoreboard';

export default function App() {

  return (
    <Provider>
        <Overlay />
        <Banner />
        <Phrase />
        <Qwerty />
        <Scoreboard />
    </Provider>
  );
}