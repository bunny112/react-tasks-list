import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg.jpg";

function Home() {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  };

  return (
    <div className="container-fluid " style={sectionStyle}>
      <h1>Welcome to my home page</h1>
      <p>this is the landing page of your application.</p>
      <div className="buttonContainer" style={buttonContainerStyle}>
        <button
          onClick={() => navigate("/tasks")}
          style={{
            borderRadius: "50px",
            padding: "10px",
            height: "45px",
            marginTop: "20px",
            width: "110px",
          }}
        >
          Tasks
        </button>
        <button
          onClick={() => navigate("/todos")}
          style={{
            backgroundColor: "blue",
            borderRadius: "50px",
            margin: "20px",
          }}
        >
          Todo List
        </button>
      </div>
    </div>
  );
}

export default Home;
