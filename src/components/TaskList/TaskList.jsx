import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

export default function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          onDelete={() => {
            onDelete(index);
          }}
          onEdit={(newTitle, newDescription) =>
            onEdit(index, newTitle, newDescription)
          }
        />
      ))}
    </div>
  );
}
