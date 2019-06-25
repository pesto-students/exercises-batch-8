import React, { Component } from 'react';


class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isTimerOn: false,
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    return this.setState({
      isTimerOn: true,
    }),
    this.timer = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 1000)
  }
  
  stopTimer() {
    this.setState({
      isTimerOn: false,
    });
    clearInterval(this.timer);
  }
  
  resetTimer() {
    this.setState({
      time : 0,
      isTimerOn : false,
    });
    clearInterval(this.timer);
  }

  render() {
    const { time, isTimerOn } = this.state;
    return (
      <div>
        <h3> {time} </h3>
        <button type="button" onClick={isTimerOn ? this.stopTimer : this.startTimer}> {isTimerOn ? 'Stop Time' : 'Start Timer'}</button>
        <button type="button" onClick={this.resetTimer} > Reset</button>
      </div>
    );
  }
}

export default StopWatch;
