import React, { Component } from 'react';
import Habits from './components/Habits';

import './App.css';

class App extends Component {
  state = {
    habits: [
      {
        kha_identi: 1,
        kha_name: 'Learn React',
        kha_descri: 'description',
        kha_streak: 1,
        kha_crdate: Date.now(),
        kha_eddate: null,
        kha_active: true
      }, 
      {
        kha_identi: 2,
        kha_name: 'Do stuff',
        kha_descri: '',
        kha_streak: 5,
        kha_crdate: Date.now(),
        kha_eddate: null,
        kha_active: false
      }, 
      {
        kha_identi: 3,
        kha_name: 'Dont react',
        kha_descri: 'wa wawawawa wa wawa',
        kha_streak: 11,
        kha_crdate: Date.now(),
        kha_eddate: Date.now(),
        kha_active: true
      }
    ]
  }

  render() {
    return (
    <div className="App">
      <h1>App</h1>
      <Habits habits={this.state.habits} />
    </div>
    );
  }
}

export default App;
