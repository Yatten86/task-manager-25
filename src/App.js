import { useState, useContext } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import "./assets/styles/theme.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <div className={`App ${theme}`}>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      {/* Change theme button */}

      <TaskList tasks={tasks} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
