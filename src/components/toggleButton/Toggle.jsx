// ToggleButton.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ToggleButton() {
  const { isClicked, setIsClicked } = useContext(ThemeContext); // ✅ Context access

  const styles = {
    backgroundColor: isClicked ? "#000" : "#fff",
    color: isClicked ? "#fff" : "#000",
    width: "100%",
    height: "100vh",
  };

  return (
    <div className="toggle-Button text-center" style={styles}>
      <button
        onClick={() => setIsClicked(!isClicked)}
        style={{ borderRadius: "50Px", margin: "10px" }}
      >
        Toggle
      </button>
      <p>{isClicked ? "You clicked the button!" : "Waiting for click..."}</p>
    </div>
  );
}

export default ToggleButton;
