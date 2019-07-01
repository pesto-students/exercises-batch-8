import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  state: {
    posts: [],
    currPageNo: JSON.parse(sessionStorage.getItem('currPageNo')) || 1,
  };

  headers = {
    'Content-Type': 'application/json',
    'pesto-password': 'darth vader',
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    const { currPageNo: pageNum } = this.state;
    const url = `http://localhost:3001/posts/${pageNum}`;
    const { headers } = this;
    fetch(url, { headers })
      .then(res => res.json())
      .then(response => {
        this.setState({ posts: [...response.data] });
      })
  }

  updatePosts = (pageNum) => {
    const url = `http://localhost:3001/posts/${pageNum}`;
    const { headers } = this;

    fetch(url, { headers })
    .then(res => res.json())
    .then(response => {
      this.setState({ posts: [...response.data] });
    });
  }

  handleNextClick = () => {
    const { currPageNo } = this.state;
    const nextPageNumber = currPageNo + 1;
    sessionStorage.setItem('currPageNo', nextPageNumber);
    this.setState({
      ...this.state,
      currPageNo: nextPageNumber,
    });
    this.updatePosts(nextPageNumber);
  }

  handlePrevClick = () => {
    const { currPageNo } = this.state;
    if (currPageNo !== 1) {
      const prevPageNumber = currPageNo - 1;
      sessionStorage.setItem('currPageNo', prevPageNumber);
      this.setState({
        ...this.state,
        currPageNo: prevPageNumber,
      })
      this.updatePosts(prevPageNumber);
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
