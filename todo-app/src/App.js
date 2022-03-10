import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "delectus aut autem",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "quis ut nam facilis et officia qui",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "fugiat veniam minus",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "et porro tempora",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 5,
      text: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 6,
      text: "qui ullam ratione quibusdam voluptatem quia omnis",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      {showAddTask && <AddTask onAdd={addTask} />}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks!"
      )}
    </div>
  );
};

export default App;
