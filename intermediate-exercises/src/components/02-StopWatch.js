/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
    this.interval = null;
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleStart() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    // time delay fix?
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer + 1 }));
    }, 1);
  }

  handleStop() {
    clearInterval(this.interval);
  }

  handleClear() {
    this.setState({ timer: 0 });
  }

  render() {
    return (
      <div>Stop Watch
        <br />
        <span>{this.state.timer}</span>
        <br />
        <button onClick={this.handleStart}> Start </button>
        <button onClick={this.handleStop}> Stop </button><br />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
