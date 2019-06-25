import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: '' };

    this.onMovieChange = this.onMovieChange.bind(this);
  }

  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    let message;
    if (!this.state.movie.length) {
      message = <p>Hey there. Enter your favorite movie.</p>;
    } else {
      message = <p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>;
    }

    return (
      <div>
        {message}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
