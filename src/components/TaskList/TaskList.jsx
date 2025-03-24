import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} description={task.description} />
      ))}
    </div>
  );
}
