import { useState, useContext } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import "./assets/styles/theme.css";
import Homepage from "./components/Homepage/Homepage";
import Modal from "./components/Modal/Modal";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isHomepage, setIsHomepage] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    {
      title: "Learn React",
      description: "Understand components and props",
      completed: false,
    },
    {
      title: " Create a Task Manager",
      description: "Build reusable components",
      completed: false,
    },
    {
      title: "Recapitulate HTML",
      description: "Refresh your HTML5 information",
      completed: true,
    },
    {
      title: "Create styled components",
      description: "Update from plain CSS to TailwinCSS",
      completed: true,
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

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  //Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed; // complete
    if (filter === "incomplete") return !task.completed; // incomplete
    return true; // all
  });

  return (
    <div className={`App ${theme}`}>
      {isHomepage ? (
        <Homepage onNavigate={() => setIsHomepage(false)} />
      ) : (
        <>
          <h1>Task Manager</h1>
          <AddTask onAdd={handleAddTask} />

          <div className="filter-buttons">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("incomplete")}>Incomplete</button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onClick={handleTaskClick}
            onToggleComplete={toggleTaskCompletion}
          />
        </>
      )}
      {selectedTask && <Modal task={selectedTask} onClose={handleCloseModal} />}
      <button on onClick={() => setIsHomepage(!isHomepage)}>
        {isHomepage ? "Go to Task Manager" : "Back to Home Page"}
      </button>

      {/* Change theme button */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    // <div className={`App ${theme}`}>
    //   <Modal />
    // </div>
  );
}

export default App;
