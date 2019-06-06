import React, { Component } from 'react';
import './styles.css';

import Comment from '../Comment/Comment';

export class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="postAction">

        </div>
        <div className="postContent">
          <a href="#">
          <span className="id">#{ this.props.post.id }</span>
          <h3 className="title">{ this.props.post.title }</h3>
          </a>
          <div className="fl">
            <a href="javascript:void(0)" className="userId">{ "Vinicius de Souza" }</a>
            <label> – Created 2019/06/06</label>
          </div>
          <div class="postPreview">
          { this.props.post.body }
          </div>
          <div style={{ marginBottom: 12 }}></div>
          {/* <h3>Comments</h3>
          <Comment/> */}
        </div>
      </div>
    );
  }
}

export default Post;