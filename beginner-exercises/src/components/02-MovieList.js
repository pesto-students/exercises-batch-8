import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        'The Godfather',
        'Iron Man',
        'Thor',
        'Captain America',
        'The Avengers',
      ],
    };
  }

  render() {
    return (
      <ul className="movies-list">
        {this.state.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    );
  }
}

export default MovieList;
