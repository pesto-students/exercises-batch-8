import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    if (!this.getPageNo()) {
      this.setPageNo(1);
    }
  }

  
  componentDidMount() {
    this.getPosts();
  }
  
  getPageNo = () => {
    return Number.parseInt(localStorage.getItem('page'), 10);
  }

  getURL = () => {
    const apiUrl = `http://localhost:3001/posts/${this.getPageNo()}`;
    return apiUrl;
  }
  
  setPageNo = (page) => {
    localStorage.setItem('page', page);
  }

  handleNextClick = () => {
      this.setPageNo(this.getPageNo() + 1);
      this.getPosts();
  }

  handlePrevClick = () => {
      this.setPageNo(this.getPageNo() - 1);
      this.getPosts();
  }

  getPosts = () => {
    let headers = {
      method: 'GET',
      headers: new Headers({'pesto-password': 'darth vader'}),
    };
    fetch(this.getURL(), headers)
      .then(res => {
        return res.json();
      })
      .then(res => this.setState({ posts: res.data }))
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick} disabled={this.getPageNo()===1}>
          Previous
        </button>
        <button onClick={this.handleNextClick} disabled={this.getPageNo()===10}>
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
