/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-unresolved
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
    const { name } = this.state;
    return (
      <div>
        <p>
          Good morning,
          {' '}
          {name}
          !
        </p>
        <br />
        <button type="button" name="update" onClick={() => this.setState(prev => prev)}>Refresh</button>
      </div>
    );
  }
}

export default LifeCycle;
