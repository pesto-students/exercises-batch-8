import React from 'react';
import { connect } from 'react-redux';
import store from './index.js';
import './App.css';
import axios from 'axios';

const mapStateToProps = store => ({
  repos: store.repos,
});

class App extends React.Component {
  fetchRepos() {
    axios.get('https://api.github.com/users/sourabhmodi20051/repos').then((response) => {
      store.dispatch({
        type: 'GITHUB_REPOS',
        repos: response.data.map(repo => repo.name),
      });
    });
  }

  componentDidMount() {
    this.fetchRepos();
  }

  render() {
    return <div>{this.props.repos}</div>;
  }
}

export default connect(mapStateToProps)(App);
