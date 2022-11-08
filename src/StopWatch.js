//stopwatch -> 1. start 2. stop 3. reset - Buttons
import React from "react";
import StopWatchDisplay from "./StopWatchDisplay";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    //states to check running of the timer
    //current time  tt:tt:tt

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  //Need functions to handle Start, Stop, Reset

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  start = () => {
    console.log("start");
    if (!this.state.running) {
      this.setState({
        running: true,
      });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  

  stop = () => {
    console.log("stop");
    this.setState({
      running: false,
    });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({
      currentTimeMs: this.state.currentTimeMs + 10,
    });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({
        currentTimeSec: this.state.currentTimeSec + 1,
      });
      this.setState({
        currentTimeMs: 0,
      });
    }

    if (this.state.currentTimeSec >= 60) {
      this.setState({
        currentTimeMin: this.state.currentTimeMin + 1,
      });

      this.setState({
        currentTimeSec: 0,
      });
    }
  };
  resume = () => {
    if (!this.state.running) {
        this.setState({
          running: true,
        });
        this.watch = setInterval(() => this.pace(), 10);
      }
  };

  reset = () => {
    console.log("reset");
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  render() {
    return (
      <div>
        <center>
          <StopWatchDisplay {...this.state} formatTime={this.formatTime} />
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.resume}>Resume</button>
          <button onClick={this.reset}>Reset</button>
        </center>
      </div>
    );
  }
}

export default StopWatch;
