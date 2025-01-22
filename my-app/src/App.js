import React from 'react';
import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Player Management</h1>
        </header>
        <main>
          <PlayerList />
          <CreatePlayer />
        </main>
      </div>
  );
}

export default App;