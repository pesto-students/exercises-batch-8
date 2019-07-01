import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../lib/API';

import './style.css';

class ViewPost extends Component {
  state = {
    post: {},
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.loadPost(id);
  }

  loadPost = async (id) => {
    const postResult = await get(`/post/${id}`);
    if (!postResult.data) {
      // handle no data here.
    }
    this.setState({
      post: postResult.data,
    });
  }

  render() {
    const { title, body } = this.state.post;
    return (
      <div>
        <h2>Post: </h2>
        <hr />
        <br />
        <h1>{title}</h1>
        <p>{body}</p>

        <Link to="/">&lt;- Go Back</Link>
      </div>
    );
  }
}

export default ViewPost;
