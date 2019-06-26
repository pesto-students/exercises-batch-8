/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
// const GithubRepos = ({ repos }) => (
//   <ul>
//     {/* Task: The list of repos here */}
//   </ul>
// );

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
// GithubRepos.propTypes = {

// };

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  async getRepos() {
    const { username } = this.state;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      console.log(response);
      this.setState({ repos: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  changeUserName(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    const { username } = this.state;
    const { repos } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.changeUserName}
        />
        <button
          type="button"
          onClick={this.getRepos}
        >
          Get Repos
        </button>
        {/* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */}
        {
          repos.map(repo => (
            <div>
              <img src={repo.owner.avatar_url} alt={repo.name} width="150vw" />
              <p>{repo.name}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default UsernameForm;
