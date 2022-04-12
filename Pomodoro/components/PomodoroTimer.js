import { Component } from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./Timer";

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 1,
      breakTime: 5,
      intervalType: "Working",
    };
  }

  handleTimerCompleted = () => {
    if (this.state.intervalType === "Working") {
      this.setState({
        intervalType: "Break",
      });
    } else {
      this.setState({
        intervalType: "Working",
      });
    }
  };

  handleTime = () => {
    if (this.state.intervalType === "Working") {
      return this.state.workTime;
    } else {
      return this.state.breakTime;
    }
  };

  render() {
    let time = this.handleTime();
    return (
      <View>
        <Timer
          intervalType={this.state.intervalType}
          Oncomplete={this.handleTimerCompleted}
          period={time}
        />
      </View>
    );
  }
}
export default PomodoroTimer;
