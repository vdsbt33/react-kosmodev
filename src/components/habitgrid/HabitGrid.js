import React, { Component } from 'react'
import HabitItem from '../habititem/HabitItem';
import PropTypes from 'prop-types';
import '../../css/HabitGrid.css';

export class HabitGrid extends Component {
  render() {
    return this.props.habits.map((habit) => (
      <HabitItem key={habit.kha_identi} habit={habit}/>
    ));
  }
}

// PropTypes
HabitGrid.propTypes = {
  habits: PropTypes.array.isRequired
}

export default HabitGrid
