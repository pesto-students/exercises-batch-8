/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-unresolved
import React, { Component } from 'react';

class MovieList extends Component {
  constructor() {
    super();
    this.movies = [
      'The Godfather',
      'The Dark Knight',
      'Schindler\'s list',
    ];
  }

  render() {
    return (
      <ul className="movies-list">
        {
          this.movies.map(movie => <li>{movie}</li>)
        }
      </ul>
    );
  }
}

export default MovieList;
