import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Pesto' };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  onClick(event) {
    this.setState({ name: 'India' });
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.onClick}>Click Me!</button>
      </div>
    );
  }
}

export default LifeCycle;
