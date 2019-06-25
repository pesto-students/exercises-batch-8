import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    return (
      <div>
        <p>
          My favorite movie is
          {' '}
          <span style={{ color: 'blue' }}>{this.state.movie}</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
