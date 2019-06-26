import React from "react";
import { connect } from "react-redux";

const ReposList = ({ repos }) => {
  const list = repos.map((repo, index) => {
    return (
        <li key={index}>
            {repo.name}
        </li>
    )
  });
  return <div>{list}</div>;
};

const mapStatetoProps = state => {
    const { repos } = state;
  return {
    repos,
  };
};
export default connect(
  mapStatetoProps,
  null
)(ReposList);