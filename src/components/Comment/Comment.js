import React, { Component } from 'react';
import './styles.css';

export class Comment extends Component {
  comment =
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
  }

  render() {
    return (
      <div className="comment">
        <label>Comment #: </label> { this.comment.id }
        <label>Name: </label> { this.comment.name }
        <label>Username: </label> { this.comment.username }
        <label>E-mail: </label> { this.comment.email }
      </div>
    )
  }
}

export default Comment;