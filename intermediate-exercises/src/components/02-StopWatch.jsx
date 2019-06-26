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
    this.state = {
      time: 0,
      isPaused: true,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    setInterval(() => {
      if (!this.state.isPaused) {
        this.state.time += 20;
        this.setState({ ...this.state });
      }
    }, 20);
  }
  toggleTimer() {
    this.setState({ ...this.state, isPaused: !this.state.isPaused });
  }
  render() {
    return (
      <div>
        <h1>Stop Watch:</h1>
        <div>{this.state.time}</div>
        <button onClick={this.toggleTimer}>{(() => {
            if (this.state.time === 0) {
              return 'Start';
            }
            if (this.state.isPaused) {
              return 'Resume';
            }
            return 'Stop';
          })()}
        </button>
      </div>
    );
  }
}

export default StopWatch;
