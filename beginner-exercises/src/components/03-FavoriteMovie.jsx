import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }
  onMovieChange(event) {
    this.setState({ ...this.state, movie: event.target.value });
  }

  render() {
    return (
      <div>
        <p>
          My favorite movie is{' '}
          <span style={{ color: 'blue' }}>{this.state.movie}</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
        <p>
          {this.state.movie.length === 0
            ? 'Hey there. Enter your favorite movie.'
            : null}
        </p>
      </div>
    );
  }
}


export default FavoriteMovie;
