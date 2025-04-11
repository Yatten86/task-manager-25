import React, { useState } from "react";
import "./AddTask.css";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium"); //default priority

  const handleAdd = () => {
    onAdd({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("Medium"); //Reset field after adding the task
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
      <select
        name="priority"
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
