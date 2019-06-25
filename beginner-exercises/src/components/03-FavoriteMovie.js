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

// WIP - refactor to a better solution

    // set the value of displayText conditionally
    let displayText = "";

    if (this.state.movie.length === 0) {
      displayText = <p>Hey there. Enter your favorite movie.</p>;
    } else {
      displayText = (
        <p>
          My favorite movie is <span style={{ color: "blue" }}>{this.state.movie}</span>
        </p>
      );
    }

    return (
      <div>
        {displayText}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}




export default FavoriteMovie;
