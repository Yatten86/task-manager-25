import React, { useState } from "react";
import "./Task.css";

export default function Task({
  title,
  description,
  onDelete,
  onEdit,
  onClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    onEdit(newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div className="task" onClick={onClick}>
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
          </div>
        </>
      )}
    </div>
  );
}
