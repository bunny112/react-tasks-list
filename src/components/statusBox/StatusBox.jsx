import React from "react";

function StatusBox({ status }) {
  let style = {};

  if (status === "success") {
    style = { backgroundColor: "lightgreen", padding: "10px", margin: "10px" };
  } else if (status === "error") {
    style = { backgroundColor: "lightcoral", padding: "10px", margin: "10px" };
  } else if (status === "warning") {
    style = { backgroundColor: "yellow", padding: "10px", margin: "10px" };
  }

  return <div style={style}>Status: {status}</div>;
}

export default StatusBox;
