/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';


class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log('Updated!');
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  render() {
    return (<p>Good morning, {this.state.name}!</p>);
  }
}

export default LifeCycle;
