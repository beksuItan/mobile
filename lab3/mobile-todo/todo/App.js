import { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  const handleChecked = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTodo = (id) => {
    setTodos((todos.filter((todo) => todo.id !== id)));
  }

  return (
    <ScrollView>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <TodoList todos={todos} onCheck={handleChecked} onDelete={deleteTodo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
