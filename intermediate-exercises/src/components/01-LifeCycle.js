import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    console.log(`I'm mounted!`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!', { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  handleButtonClick() {
    const { name } = this.state;
    if (name === 'Pesto') {
      this.setState({ name: 'Tech' });
    } else {
      this.setState({ name: 'Pesto' });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <p>
          Good morning, {this.state.name}!
        </p>
        <button onClick={this.handleButtonClick}>
          Update
        </button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
