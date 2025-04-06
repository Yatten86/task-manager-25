import React, { useState } from "react";
import "./Task.css";

export default function Task({
  title,
  description,
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
    <div className={`task ${completed ? "completed" : ""}`} onClick={onClick}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="buttons">
            <button className="delete" onClick={onDelete}>
              Delete Task
            </button>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit Task
            </button>
            <button onClick={onToggleComplete}>
              {completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
