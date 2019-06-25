import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li>The Godfather</li>
        <li>The Count of Monte Cristo</li>
        <li>The Downfall</li>
      </ul>
    );
  }
}

export default MovieList;
