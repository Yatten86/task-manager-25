import React from "react";
import "./Homepage.css";

export default function Homepage({ onNavigate }) {
  return (
    <div className="homepage">
      <h1>Welcome to Task Manager</h1>
      <p>Manage your task effectively and customize themes!</p>
      <button onClick={onNavigate}>Go to Task Manager</button>
    </div>
  );
}
