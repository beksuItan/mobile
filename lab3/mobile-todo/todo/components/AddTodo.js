import { useState } from "react";
import { View, Image, Text,TouchableOpacity, TextInput, Button, StyleSheet, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = () => {
    if (!title) {
      Alert.alert("Input empty");
    } else {
      onSubmit({ title, completed });
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Add todo"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={addTodo}>
        <View style={styles.addBtn}>
          <Image style={styles.addBtn} source={require('../assets/plus.png')} />
        </View>
      </TouchableOpacity>
      {/* <Button title="Add" onPress={addTodo} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    width: '85%',
    fontSize: 18,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    // backgroundColor: '#eee',
    borderColor: "#088F8F",
  },
  addBtn: {
    width: 30,
    height: 30
  }
});

export default AddTodo;
