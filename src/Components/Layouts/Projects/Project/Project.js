import React, { Component } from "react";
import Classes from "./Project.module.css";
import img1 from "../../../../assests/projects/mychat.PNG";
import img2 from "../../../../assests/projects/hospital.PNG";
import img3 from "../../../../assests/projects/synergy.PNG";
import img4 from "../../../../assests/projects/laravelmulti.PNG";
import img5 from "../../../../assests/projects/laravelblog.PNG";
import img6 from "../../../../assests/projects/laravelacl.PNG";
import img7 from "../../../../assests/projects/BlogManagement.PNG";
import img8 from "../../../../assests/projects/ReactToDoList.PNG";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          img: img1,
          topic: "We Chat",
          link: "https://github.com/SajidAnTechie/WeChat",
        },
        {
          id: 2,
          img: img2,
          topic: "Hospital CMS",
          link: "https://github.com/SajidAnTechie/Hospital-Management-Sys",
        },
        {
          id: 3,
          img: img3,
          topic: "Synergy",
          link: "https://github.com/SajidAnTechie/SYNERGY",
        },
        {
          id: 4,
          img: img4,
          topic: "LaravelMultiAuth",
          link: "https://github.com/SajidAnTechie/laravel-Multiauth",
        },
        {
          id: 5,
          img: img5,
          topic: "LaravelMultiBlog",
          link: "https://github.com/SajidAnTechie/laravel-blog",
        },
        {
          id: 6,
          img: img6,
          topic: "LaravelAcl",
          link: "https://github.com/SajidAnTechie/Laravel-ACL",
        },
        {
          id: 7,
          img: img7,
          topic: "BlogManagement CMS",
          link: "https://github.com/SajidAnTechie/Content-Management-Sys",
        },
        {
          id: 8,
          img: img8,
          topic: "React ToDoList",
          link: "https://github.com/SajidAnTechie/React-ToDoList",
        },
      ],
    };
  }
  render() {
    let projects = this.state.projects.map((project) => {
      return (
        <div key={project.id} className={Classes.box}>
          <span className={Classes.topic}>
            <span>{project.topic}</span>
          </span>
          <img src={project.img} />
          <a href={project.link}>
            <button className={Classes.githubbut}>View in Github</button>
          </a>
        </div>
      );
    });
    return <div className={Classes.content}>{projects}</div>;
  }
}

export default Project;
