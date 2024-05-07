import React from "react";
import Public from "../components/Tasks/Public/Public";
import { Link } from "react-router-dom";
import "./Task.css";
import Kick from "../components/Tasks/Kick/Kick";
import Mellbet from "../components/Tasks/Mellbet/Mellbet";
import Win1 from "../components/Tasks/Win1/Win1";
import Doge from "../components/Tasks/Doge/Doge";
import Egg from "../components/Tasks/Egg/Egg";

const Task = () => {
  return (
    <div className="task-container">
      <div className="task-back-button">
        <Link to="/" className="task-back-link">
          &lt; Назад
        </Link>
      </div>
      <div className="task-center-text">📋</div>
      <div className="task-components">
        <Public />
        <Doge />
        <Win1 />
        <Mellbet />
        <Egg />
      </div>
    </div>
  );
};

export default Task;
