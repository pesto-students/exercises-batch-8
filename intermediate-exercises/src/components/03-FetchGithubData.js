/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => (
  <ul>
    { /* eslint-disable-next-line react/prop-types */}
    {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
  </ul>
);

GithubRepos.propTypes = {
  repos: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async fetchRepos() {
    const reposData = await Axios.get(`https://api.github.com/users/${this.state.username}/repos`);
    this.setState({ ...this.state, repos: reposData.data });
  }

  handleChange(e) {
    this.setState({ ...this.state, username: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.fetchRepos()}
        >
          Get Repos
        </button>
        <GithubRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UsernameForm;
