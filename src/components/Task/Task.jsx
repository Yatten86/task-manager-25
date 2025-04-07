import React, { useState } from "react";
import "./Task.css";

export default function Task({
  title,
  description,
  priority,
  completed,
  onDelete,
  onEdit,
  onClick,
  onToggleComplete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    onEdit(newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div
      className={`task ${
        completed ? "completed" : ""
      } ${priority.toLowerCase()}`}
      onClick={onClick}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSave();
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              Priority: <strong>{priority}</strong>
            </p>
          </div>

          <div className="buttons">
            <button
              className="delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete Task
            </button>
            <button
              className="edit"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              Edit Task
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete();
              }}
            >
              {completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
