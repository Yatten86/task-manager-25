import React, { useState } from "react";
import "./AddTask.css";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
