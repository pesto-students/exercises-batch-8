import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

class ReposList extends Component {
  render() {
    const { repos } = this.props;
    return (
      <Fragment>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  //   console.log("state :", state);
  return {
    repos: state.repos
  };
};

export default connect(
  mapStateToProps,
  null
)(ReposList);
