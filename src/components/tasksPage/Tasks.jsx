import React from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const navigate = useNavigate();
  const tasks = [
    {
      id: 1,
      title: "Design Landing Page",
      description: "Create a responsive landing page for the new product.",
    },
    {
      id: 2,
      title: "Fix Login Bug",
      description: "Resolve the login issue affecting Safari browsers.",
    },
    {
      id: 3,
      title: "Write Unit Tests",
      description: "Add unit tests for the TaskList component.",
    },
    {
      id: 4,
      title: "Update Documentation",
      description: "Review and update project documentation on GitHub.",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tasks</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Tasks;
