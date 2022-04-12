import { ScrollView, StyleSheet } from "react-native";
import PomodoroTimer from "./components/PomodoroTimer";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <PomodoroTimer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;