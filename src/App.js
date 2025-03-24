import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Learn React", description: "Understand components and props" },
    {
      title: " Create a Task Manager",
      description: "Build reusable components",
    },
  ]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
