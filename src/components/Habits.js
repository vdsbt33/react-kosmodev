import React, { Component } from 'react';

class Habits extends Component {

  render() {
    return this.props.habits.map((habit) => (
      <>
      <label>Identi: </label> { habit.kha_identi } <br/>
      <label>Name: </label> { habit.kha_name } <br/>
      <label>Descri: </label>{ habit.kha_descri } <br/>
      <label>Streak: </label>{ habit.kha_streak } <br/>
      <label>CRDate: </label>{ habit.kha_crdate } <br/>
      <label>EDDate: </label>{ habit.kha_eddate } <br/>
      <label>Active: </label>{ habit.kha_active } <br/>
      <br/>
      </>
      ));
  }
}

export default Habits;