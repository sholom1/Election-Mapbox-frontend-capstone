import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import { ElectionmapContainer } from '../components/AllPlayers/containers/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
          <ElectionmapContainer />
        </header>
      </div>
    );
  }
}

export default App;
