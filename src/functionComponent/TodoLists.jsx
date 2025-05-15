import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i == index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Todo List</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1 }}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              textDecoration: task.completed ? "line-through" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              onClick={() => toggleTask(index)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
            <button onClick={() => navigate("/")}>Back</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
