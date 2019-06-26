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
      isRunning: false,
      runningTime: 0,
    };

    this.toggleStopWatch = this.toggleStopWatch.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  resetStopWatch() {
    this.setState({
      ...this.state,
      isRunning: false,
      runningTime: 0,
    });
  }

  toggleStopWatch() {
    const { isRunning } = this.state;
    if (isRunning) {
      clearInterval(this.timer);
    }

    this.setState((state) => {
      return { isRunning: !state.isRunning };
    });


    this.timer = setInterval(() => {
      const startTime = Date.now() - this.state.runningTime;
      this.setState({ runningTime: Date.now() - startTime });
    });
  }

  render() {
    const { isRunning, runningTime } = this.state;
    return (
      <div>
        <div>Stop Watch</div>
        <h1>{runningTime}</h1>
        <button onClick={this.toggleStopWatch()}>{isRunning ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default StopWatch;
