import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => (
  <ul>
    {
      repos.map(repo => (
        <li key={repo.id}>
          {repo.name}
        </li>
      ))
    }
  </ul>
);

GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: String,
  })),
};

GithubRepos.defaultProps = {
  repos: [],
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };

    this.fetchRepos = this.fetchRepos.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  fetchRepos() {
    const { username } = this.state;
    const url = `https://api.github.com/users/${username}/repos`
    axios.get(url)
      .then(({data}) => this.setState({ repos: data }));
  }

  handleOnChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  
  render() {
    const { repos } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.handleOnChange}
        />
        <button
          onClick={this.fetchRepos}
        >
          Get Repos
        </button>
        <GithubRepos repos={repos}/>
      </div>
    );
  }
}

export default UsernameForm;
