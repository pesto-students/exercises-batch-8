/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-unresolved
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
  constructor() {
    super();
    this.state = {
      occupiedSeconds: 0,
      intervalID: null,
    };
    this.startStopWatch = this.startStopWatch.bind(this);
    this.stopStopWatch = this.stopStopWatch.bind(this);
    this.clearStopWatch = this.clearStopWatch.bind(this);
  }

  startStopWatch() {
    const { intervalID } = this.state;
    if (intervalID === null) {
      const newIntervalID = window.setInterval(() => {
        const { occupiedSeconds } = this.state;
        this.setState({ occupiedSeconds: occupiedSeconds + 1 });
      }, 1);
      this.setState({ intervalID: newIntervalID });
    }
  }

  stopStopWatch() {
    const { intervalID } = this.state;
    if (intervalID !== null) {
      window.clearInterval(intervalID);
      this.setState({ intervalID: null });
    }
  }

  clearStopWatch() {
    const { intervalID } = this.state;
    if (intervalID !== null) {
      window.clearInterval(intervalID);
      this.setState({ occupiedSeconds: 0, intervalID: null });
    }
  }

  render() {
    const { occupiedSeconds } = this.state;
    return (
      <div>
        <p>
          milliseconds :
          {' '}
          {occupiedSeconds}
        </p>
        <button name="start" type="button" onClick={this.startStopWatch}>Start</button>
        <button name="stop" type="button" onClick={this.stopStopWatch}>Stop</button>
        <button name="clear" type="button" onClick={this.clearStopWatch}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
