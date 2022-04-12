import {Component} from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import TimerDisplay from "./TimerDisplay";
import Buttons from "./Buttons";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: this.props.period * 60,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ running: false, time: nextProps.period * 60 });
    if (this.state.running === true && this.state.time == 0) {
      this.handlePlay();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          running={this.state.running}
          intervalType={this.props.intervalType}
        />
        <TimerDisplay time={this.state.time} />
        <Buttons
          play={this.handlePlay}
          pause={this.handlePause}
          reset={this.handleReset}
          running={this.state.running}
        />
      </View>
    );
  }

  componentDidUpdate() {
    if (this.state.running === true && this.state.time == 0) {
      clearInterval(this.timerId);
      this.props.Oncomplete();
    } else if (this.state.running === false) {
      clearInterval(this.timerId);
    }
  }

  handlePlay = () => {
    this.setState({
      running: true,
    });
    this.timerId = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.timerId);
    this.setState({
      running: false,
    });
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({
      running: false,
      time: this.props.period * 60,
    });
  };
}

export default Timer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'space-evently'
	}
})