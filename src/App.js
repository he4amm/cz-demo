import React, { Component } from 'react';
import PersonalCard from './components/PersonalCard';
import Notes from './components/Notes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="PersonalCard__container">
          <PersonalCard />
        </div>
        <div className="Notes__container">
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
