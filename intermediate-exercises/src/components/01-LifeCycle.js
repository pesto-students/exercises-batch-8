import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Good Morning, Pesto!' };
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


changeTime() { 
  return this.setState( {name: "Abhinav Sharma"});
}



  render() {
    const { name } = this.state;
    return (
      <div>
        <p>{name}</p>
        <button type="button" onClick={this.changeTime()}>
          Update Component
        </button>
      </div>
    );
  }
}

export default LifeCycle;
