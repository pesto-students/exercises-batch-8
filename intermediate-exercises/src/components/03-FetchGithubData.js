import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GithubRepos = ({ repos }) => (
  <ol className="repo-list">
    {repos.map(repo => (
      <li key={String(repo.id)}>
        {repo.name}
      </li>
    ))}
  </ol>
);

GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
      isFetchingData: false,
      isError: false,
      errorMessage: '',
    };
    this.fetchRepositories = this.fetchRepositories.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  setFetchingStatus(status) {
    this.setState({
      isFetchingData: status,
    });
  }

  setError(status, message = '') {
    this.setState({
      isError: status,
      errorMessage: message,
    });
  }

  fetchRepositories() {
    this.setFetchingStatus(true);
    this.setError(false);
    axios('https://api.github.com/users/jaspreet57/repos')
      .then(({ status, data }) => {
        this.setFetchingStatus(true);
        const repositories = data.map(({ id, name }) => ({ id, name }));
        if (status === 200) {
          this.setState({
            repos: repositories,
          });
        } else {
          this.setError(true, `Get repos api failed with status ${status}`);
        }
      })
      .catch((error) => {
        this.setError(true, error.message);
      }).finally(() => {
        this.setFetchingStatus(false);
      });
  }

  updateUsername(event) {
    const { value } = event.target;
    this.setState({
      username: value,
    });
  }

  render() {
    const {
      username,
      repos,
      isFetchingData,
      isError,
      errorMessage,
    } = this.state;
    return (
      <React.Fragment>
        <input
          type="text"
          name="username"
          onChange={this.updateUsername}
          value={username}
        />
        &nbsp;
        <button
          onClick={this.fetchRepositories}
          disabled={isFetchingData}
          type="button"
        >
          Get Repos
        </button>
        {
          isError
          && (
            <p>
              Error:
              { ` ${errorMessage}` }
            </p>
          )
        }
        {isFetchingData && <p>Loading data ...</p>}
        {<GithubRepos repos={repos} />}
      </React.Fragment>
    );
  }
}

export default UsernameForm;
