//Need to display the timer
import React from "react";

class StopWatchDisplay extends React.Component {
  render() {
    return (
      <div>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs)}
        </span>
      </div>
    );
  }
}

export default StopWatchDisplay;
