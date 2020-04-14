import React from "react";
import Project from "./Project/Project";
import Classes from "./Projects.module.css";

const projects = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.content}>
        <div className={Classes.projetcs}>
          <h2>Projects</h2>
          <span>My Projects</span>
        </div>
        <Project />
      </div>
    </div>
  );
};
export default projects;
