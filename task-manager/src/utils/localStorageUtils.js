//save tasks to Local Storage
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//load tasks from Local Storage
export const loadTasksFromLocalStorage = () => {
  const storedTaks = localStorage.getItem("tasks");
  return storedTaks ? JSON.parse(storedTaks) : [];
};

//save curent theme to Local Storage
export const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

//load theme from Local Storage
export const loadThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};
