import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      isClicked: false,
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  addTask = () => {
    if (this.state.task.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.task],
        task: "",
        isClicked: true,
      }));

      setTimeout(() => {
        this.setState({ isClicked: false });
      }, 1000);
    }
  };
  deleteTasks = (index) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.filter(
        (task, taskIndex) => taskIndex !== index
      );
      return {
        tasks: updatedTasks,
      };
    });
  };

  render() {
    return (
      <div className="todo-container m-2 w-50">
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          className="todo-input"
        />
        <button
          className={`color-button ${this.state.isClicked ? "clicked" : ""}`}
          onClick={this.addTask}
          style={{ borderRadius: "50Px", margin: "10px" }}
        >
          Add Task
        </button>

        {this.state.isClicked && <div className="emoji-pop">🎉</div>}

        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => this.deleteTasks(index)}
                style={{
                  margin: "40px",
                  borderRadius: "50px",
                  backgroundColor: "red",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
