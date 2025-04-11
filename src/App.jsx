import { useState, useContext, useEffect } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { ThemeContext } from "./ThemeContext/ThemeContext.jsx";
import "./assets/styles/theme.css";
import Homepage from "./components/Homepage/Homepage";
import Modal from "./components/Modal/Modal";
import { saveTasksToLocalStorage } from "./utils/localStorageUtils";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isHomepage, setIsHomepage] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  const [tasks, setTasks] = useState([
    {
      title: "Learn React",
      description: "Understand components and props",
      completed: false,
      priority: "High",
    },
    {
      title: " Create a Task Manager",
      description: "Build reusable components",
      completed: false,
      priority: "Medium",
    },
    {
      title: "Recapitulate HTML",
      description: "Refresh your HTML5 information",
      completed: true,
      priority: "Low",
    },
    {
      title: "Create styled components",
      description: "Update from plain CSS to TailwinCSS",
      completed: false,
      priority: "Medium",
    },
  ]);

  //fetch tasks from Local Storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); //updates state with the saved tasks)
    }
  }, []);

  const handleAddTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks); //persist data to local storage
  };

  const handleEditTask = (index, newTitle, newDescription, newPriority) => {
    const updateTasks = tasks.map((task, taskIndex) =>
      taskIndex === index
        ? {
            ...task,
            title: newTitle,
            description: newDescription,
            priority: newPriority,
          }
        : task
    );

    setTasks(updateTasks);
    saveTasksToLocalStorage(updateTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
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
    saveTasksToLocalStorage(updatedTasks);
  };

  //Filter logic
  const completionFilteredTasks = tasks.filter((task) => {
    if (!showCompleted && task.completed) return false;

    if (filter === "completed") return task.completed; // complete
    if (filter === "incomplete") return !task.completed; // incomplete
    return true; // all
  });

  //Sorting order
  const sortedTasks = [...completionFilteredTasks].sort((a, b) => {
    if (sortOrder === "none") return 0; //no sorting
    if (sortOrder === "asc") {
      return b.priority.localeCompare(a.priority); //asscending order (Low -> High)
    }
    if (sortOrder === "desc") {
      return a.priority.localeCompare(b.priority); // desscending order (High -> Low)
    }
    return 0;
  });

  return (
    <div className={`App ${theme}`}>
      {isHomepage ? (
        <Homepage onNavigate={() => setIsHomepage(false)} />
      ) : (
        <>
          <h1>Task Manager</h1>
          <AddTask onAdd={handleAddTask} />

          <div className="filters">
            {/* Filter by completion */}
            <div className="dropdown">
              <label htmlFor="filter">Filter by completion:</label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="completed">Complete</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </div>

            <div className="dropdown">
              <label htmlFor="sortOrder">Sort by priority</label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="completed-toggle">
              <label htmlFor="showCompleted">Show Completed Tasks</label>
              <input
                type="checkbox"
                id="showCompleted"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
              />
            </div>
          </div>

          <TaskList
            tasks={sortedTasks}
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
