import React from 'react';
import Form from './components/Form';
import CharacterCards from './components/CharacterCards';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <div className='title'>
          <h1>Rick and Morty Character Info</h1>
          <p>Search for characters from the rick and morty universe!</p>
        </div>
        <Form />
      </div>
      <CharacterCards />
    </div>
  );
}

export default App;
