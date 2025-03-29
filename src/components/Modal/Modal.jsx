import React from "react";
import "./Modal.css";

export default function Modal({ task, onClose }) {
  return (
    <div className="modal-overlay" onClick={onclose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{task.title}</h2>

        <p>{task.description}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
