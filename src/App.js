import React, { Component } from 'react';
import HabitGrid from './components/habitgrid/HabitGrid';
import './css/Main.css';

class App extends Component {
  state = {
    habits: [
      {
        kha_identi: 1,
        kha_name: 'Learn React.js',
        kha_descri: 'Build kosmodev using React and Node.',
        kha_streak: 2,
        kha_crdate: Date.now(),
        kha_eddate: null,
        kha_active: true
      }, 
      {
        kha_identi: 2,
        kha_name: 'Develop kosmodev',
        kha_descri: 'Make it great.',
        kha_streak: 3,
        kha_crdate: Date.now(),
        kha_eddate: null,
        kha_active: true
      }, 
      {
        kha_identi: 3,
        kha_name: 'Share in GitHub',
        kha_descri: 'Share your work and help others in their projects.',
        kha_streak: 1,
        kha_crdate: Date.now(),
        kha_eddate: null,
        kha_active: true
      }
    ]
  }

  render() {
    return (
      <div>
        <h3>HabitGrid</h3>
        <table id="habitgrid">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            <HabitGrid habits={this.state.habits}/>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
