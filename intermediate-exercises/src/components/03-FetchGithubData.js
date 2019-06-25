import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
const GithubRepos = ({ repos }) => {
  return (
    <ul>
      {repos.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {
  repos: PropTypes.array.isRequired
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repos: []
    };
  }
  getUserRepos = async () => {
    const { username } = this.state;

    if (!username || username.trim() === "") {
      console.log(
        "Please provide a username to continue fetching the repositories"
      );
      return;
    }

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      this.setState({ repos: repos });
    } catch (error) {
      console.log("error", error);
    }
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, repos } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={username}
        />
        <button onClick={this.getUserRepos}>Get Repos</button>
        {/* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */}
        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
