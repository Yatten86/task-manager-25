import { useState, useContext } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import "./assets/styles/theme.css";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isHomepage, setIsHomepage] = useState(true);

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

  const handleEditTask = (index, newTitle, newDescription) => {
    const updateTasks = tasks.map((task, taskIndex) =>
      taskIndex === index
        ? { title: newTitle, description: newDescription }
        : task
    );

    setTasks(updateTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className={`App ${theme}`}>
      {isHomepage ? (
        <Homepage onNavigate={() => setIsHomepage(false)} />
      ) : (
        <>
          <h1>Task Manager</h1>
          <AddTask onAdd={handleAddTask} />

          <TaskList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />

          {/* Change theme button */}
        </>
      )}
      <button on onClick={() => setIsHomepage(!isHomepage)}>
        {isHomepage ? "Go to Task Manager" : "Back to Home Page"}
      </button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
