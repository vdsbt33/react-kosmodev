import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class HabitItem extends Component {
  render() {
    return (
      <>
      <tr>
        <td>{ this.props.habit.kha_name }</td>
        <td>{ this.props.habit.kha_descri }</td>
      </tr>
      </>
    )
  }
}

// PropTypes
HabitItem.propTypes = {
  habit: PropTypes.object.isRequired
}

export default HabitItem
