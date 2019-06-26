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
      running: false,
      lapsedTime: 0,
    };
    this.toggleStartStop = this.toggleStartStop.bind(this);
    this.clearWatch = this.clearWatch.bind(this);
  }

  toggleStartStop() {
    const { running } = this.state;
    this.setState({
      running: !running,
    }, () => {
      const { running: runningInnerScope } = this.state;
      if (runningInnerScope) {
        this.step();
      }
    });
  }

  step() {
    this.setState(({ lapsedTime }) => ({
      lapsedTime: lapsedTime + 1,
    }), () => {
      const { running: runningInnerScope } = this.state;
      if (runningInnerScope) {
        setTimeout(() => {
          this.step();
        }, 1);
      }
    });
  }

  clearWatch() {
    const { running } = this.state;
    const newState = {
      lapsedTime: 0,
    };
    if (running) {
      newState.running = false;
    }
    this.setState(newState);
  }

  render() {
    const { running, lapsedTime } = this.state;
    return (
      <div>
        <p>
          Lapsed time is :
          {` ${lapsedTime}`}
        </p>
        <button type="button" onClick={this.toggleStartStop}>{(running && 'Stop') || 'Start'}</button>
        <button type="button" onClick={this.clearWatch}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
