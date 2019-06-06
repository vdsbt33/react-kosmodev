import React, { Component } from 'react';
import Post from './Post';

export class PostList extends Component {
  render() {
    return this.props.posts.map((post) => (
      <Post post={ post } />
    ));
  }
}

export default PostList;