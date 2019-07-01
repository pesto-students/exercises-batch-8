import React, { Component, Fragment } from 'react';
import { get } from './lib/API';

import Post from './components/Post';
import './App.css';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    let pageNumber = localStorage.getItem('post-pageNumber');
    if (!pageNumber) {
      pageNumber = 1;
      localStorage.setItem('post-pageNumber', pageNumber);
    }
    this.loadPosts(pageNumber);
  }

  loadPosts = async (pageNumber) => {
    const postsResult = await get(`http://localhost:3001/posts/${pageNumber}`);
    if (!postsResult.data) {
      // handle no data here.
    }
    this.setState({
      posts: postsResult.data,
    });
  }

  handlePrevClick = () => {
    const currentPageNumber = Number(localStorage.getItem('post-pageNumber'));
    if ( currentPageNumber > 1) {
      const previousPageNumber = currentPageNumber - 1;
      localStorage.setItem('post-pageNumber', previousPageNumber);
      this.loadPosts(previousPageNumber);
    }
  }

  handleNextClick = () => {
    const currentPageNumber = Number(localStorage.getItem('post-pageNumber'));
    if ( currentPageNumber < 10) {
      const nextPageNumber = currentPageNumber + 1;
      localStorage.setItem('post-pageNumber', nextPageNumber);
      this.loadPosts(nextPageNumber);
    }
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
