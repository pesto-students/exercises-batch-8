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
    this.state = { timeLapsed: 0 };
    this.resumeTimer = this.resumeTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  resumeTimer() {
    this.setState({ isStarted: true });
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeLapsed: prevState.timeLapsed + 1,
      }));
    }, 1);
  }

  pauseTimer() {
    this.setState({ isStarted: false });
    clearInterval(this.timer);
  }

  render() {
    let buttonFunction = this.resumeTimer;
    let buttonText = 'Start';
    if (this.state.isStarted === true) {
      buttonText = 'Stop';
      buttonFunction = this.pauseTimer;
    }
    return (
      <div>
        <div>Stop Watch</div>
        <div>{this.state.timeLapsed}</div>
        <button onClick={buttonFunction}>{buttonText}</button>
      </div>
    );
  }
}

export default StopWatch;
