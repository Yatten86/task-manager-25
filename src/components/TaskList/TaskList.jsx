import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

export default function TaskList({
  tasks,
  onDelete,
  onEdit,
  onClick,
  onToggleComplete,
}) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          completed={task.completed}
          priority={task.priority}
          onDelete={() => {
            onDelete(index);
          }}
          onEdit={(newTitle, newDescription, newPriority) =>
            onEdit(index, newTitle, newDescription, newPriority)
          }
          onClick={() => onClick(task)}
          onToggleComplete={() => onToggleComplete(index)}
        />
      ))}
    </div>
  );
}
