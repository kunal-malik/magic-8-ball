import React from 'react';
//Components
import MagicBall from './MagicBall';

import Constants from '../constants';

//This function component renders all the UI elements
const App = () => (
  <div className="app">
    <header className="app-header">
      {Constants.HEADING}
    </header>
    <main className="app-main">
      <MagicBall />
    </main>
  </div>
)

export default App;
