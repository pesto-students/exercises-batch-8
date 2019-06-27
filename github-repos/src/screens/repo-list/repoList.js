/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';
import propTypes from 'prop-types';


export class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onChange = this.onChange.bind(this);
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({
      username: value,
    });
  }

  fetchRepos() {
    this.props.fetchRepos(this.state.username);
  }

  render() {
    const { username } = this.state;
    const { repos, loading } = this.props;

    return (
      <div>
        <div>
          <label>
            Username
          <input type='text' value={username} onChange={this.onChange} />
          </label>
          <button type='button' role='button' onClick={this.fetchRepos}>Get Repos</button>
        </div>
        <h1>Repos</h1>
        {
          loading.loading
            ? <h2>Loading...</h2>
            : <ol>{repos.map(repo => <li key={repo}>{repo}</li>)}</ol>
        }
      </div>
    )
  }
}

RepoList.propTypes = {
  repos: propTypes.array,
  loading: propTypes.object,
  fetchRepos: propTypes.func,
}

const mapStateToProps = ({ repos, loading }) => {
  return { repos, loading };
}

export default connect(mapStateToProps, { fetchRepos })(RepoList);
