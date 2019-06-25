import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

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
    if (this.interval ){
      clearInterval(this.interval);
    }
    // time delay fix?
    this.interval = setInterval(() => {
      this.setState( prevState => ({ timer: prevState.timer + 1}));
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
        <br/>
        <span>{this.state.timer}</span>
        <br/>
        <button onClick={this.handleStart}> Start </button>
        <button onClick={this.handleStop}> Stop </button><br/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
