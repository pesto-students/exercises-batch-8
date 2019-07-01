import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Post from './components/Post';
import PostPage from './Page/PostPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      currentPage: 1,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }
  componentDidMount() {
    this.fetchDataForPage(this.state.currentPage);
  }
  handleNextClick() {
    const newPage = this.state.currentPage + 1;
    this.setState({ currentPage: newPage });
    this.fetchDataForPage(newPage);
  }
  handlePrevClick() {
    const newPage = this.state.currentPage - 1;
    this.setState({ currentPage: newPage });
    this.fetchDataForPage(newPage);
  }
  fetchDataForPage(pageNo) {
    axios(`http://localhost:3001/posts/${pageNo}`, {
      method: 'get',
      headers: {
        'pesto-password': 'darth vader',
      },
    }).then((resp) => {
      this.setState({ posts: resp.data.data });
    });
  }
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <Route
          path="/"
          exact
          component={() => (
            <div>
              <h2>Posts</h2>
              <hr />
              <br />
              <button onClick={this.handlePrevClick}>Previous</button>
              <button onClick={this.handleNextClick}>Next</button>
              <div>
                {this.state.posts.map(post => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <Link to={`/${post.id}`}>
                    <Fragment key={post.id}>
                      <Post post={post} />
                      <hr />
                    </Fragment>
                  </Link>
                ))}
              </div>
            </div>
          )}
        />
        <Route path="/:id" component={PostPage} />
      </Router>

    );
  }
}

export default App;
