import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { COMMIT_REPOS } from "../constants";

class GithubUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ username: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      this.props.commitReposToRedux({
        repos,
        username
      });
      this.setState({ username: "" });
    } catch (error) {
      console.log(`Failed to fetch the repos. ERROR OCCURED : ${error}`);
    }
  }
  render() {
    const { username } = this.state;
    return (
      <Fragment>
        <label htmlFor="username">Github Username : </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Get Repos</button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    commitReposToRedux: state => {
      dispatch({
        type: COMMIT_REPOS,
        payload: {
          username: state.username,
          repos: state.repos
        }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GithubUserForm);
