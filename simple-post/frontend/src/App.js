import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import { getPageData } from './apis/posts.api';
import './App.css';

// eslint-disable-next-line no-undef
const { localStorage } = window;

const updateLocalStorage = (field, cb) => {
  const currentValue = localStorage.getItem(field);
  const newValue = cb(parseInt(currentValue, 10));
  localStorage.setItem(field, newValue);
  return newValue;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      // eslint-disable-next-line eqeqeq
      disablePrev: localStorage.getItem('currentPage') == 1,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    let currentPage = localStorage.getItem('currentPage');
    if (!currentPage) {
      currentPage = updateLocalStorage('currentPage', x => x);
    }
    getPageData.call(this, currentPage);
  }

  // eslint-disable-next-line class-methods-use-this
  handleNextClick() {
    const currentPage = updateLocalStorage('currentPage', item => item + 1);
    getPageData.call(this, currentPage);
    this.setState({
      disablePrev: false,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handlePrevClick() {
    const currentPage = updateLocalStorage('currentPage', item => item - 1);
    if (currentPage < 0) {
      this.setState({
        disablePrev: true,
      });
    }
    getPageData.call(this, currentPage);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick} disabled={this.state.disablePrev}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          {this.state.posts.map(post => (
            <Fragment key={post.id}>
              <Post post={post} />
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
