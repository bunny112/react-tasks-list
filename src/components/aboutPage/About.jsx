import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our application! This project was created to help manage
        tasks efficiently.
      </p>
      <p>
        Our goal is to provide a simple and intuitive interface for users to
        keep track of their daily tasks and increase productivity.
      </p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default About;
