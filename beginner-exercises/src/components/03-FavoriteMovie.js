/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-unresolved
import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };

    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    const nextState = { ...this.state, movie: event.target.value };
    this.setState(nextState);
  }

  render() {
    const isMovieEntered = movie => movie.length > 0;
    const movieEmptyMessage = 'Hey there. Enter your favorite movie.';
    const movieEnteredMessage = 'My favorite movie is';
    const { movie } = this.state;
    return (
      <div>
        <p>
          {isMovieEntered(movie) ? movieEnteredMessage : movieEmptyMessage}
          {' '}
          <span style={{ color: 'blue' }}>{movie}</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
