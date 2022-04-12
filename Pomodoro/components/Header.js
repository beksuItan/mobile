import { Component } from "react";
import { StyleSheet, Text } from "react-native";

class Header extends Component {
  handleDisplay = () => {
    if (this.props.intervalType === "Working") {
      if (this.props.running === true) {
        return "Work";
      } else {
        return "Time to work!";
      }
    } else {
      if (this.props.running === true) {
        return "Break time";
      } else {
        return "Relax";
      }
    }
  };
  render() {
    let texttoshow = this.handleDisplay();
    return <Text style={styles.textStyle}>{texttoshow}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    marginTop: 50,
    fontWeight: "500",
    flex: 1,
    alignItems: "center",
  },
});

export default Header;
