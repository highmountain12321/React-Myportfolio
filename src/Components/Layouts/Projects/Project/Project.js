import React from "react";
import Classes from "./Project.module.css";
import img1 from "../../../../assests/projects/mychat.PNG";
import img2 from "../../../../assests/projects/hospital.PNG";
import img3 from "../../../../assests/projects/synergy.PNG";
import img4 from "../../../../assests/projects/laravelmulti.PNG";
import img5 from "../../../../assests/projects/laravelblog.PNG";
import img6 from "../../../../assests/projects/laravelacl.PNG";
import img7 from "../../../../assests/projects/blogmanagment.PNG";
import img8 from "../../../../assests/projects/reacttolist.PNG";
import img9 from "../../../../assests/projects/shoppoint.PNG";
import img10 from "../../../../assests/projects/aichatbot.PNG";
import img11 from "../../../../assests/projects/udemyclone.PNG";
import img12 from "../../../../assests/projects/linkminify.PNG";
import img13 from "../../../../assests/projects/expencetracker.PNG";
import img14 from "../../../../assests/projects/covid19.PNG";
import img15 from "../../../../assests/projects/chatdiscord.PNG";
import img16 from "../../../../assests/projects/movie.PNG";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: img9,
      alt: "SHOPPOINT",
      topic: "SHOPPOINT",
      link: "https://github.com/SajidAnTechie/ShopPoint",
    },
    {
      id: 2,
      img: img10,
      alt: "AI CHAT BOT",
      topic: "AI CHAT BOT",
      link: "https://github.com/SajidAnTechie/Webspeech-AI-Bot",
    },
    {
      id: 3,
      img: img11,
      alt: "UDEMY-CLONE-API",
      topic: "UDEMY-CLONE-API",
      link: "https://github.com/SajidAnTechie/Udemy-Clone-API",
    },
    {
      id: 4,
      img: img12,
      alt: "URL-SHORTNER",
      topic: "URL-SHORTNER",
      link: "https://github.com/SajidAnTechie/Url-Shortner",
    },
    {
      id: 5,
      img: img13,
      alt: "EXPENCE-TRACKER",
      topic: "EXPENCE-TRACKER-APP",
      link: "https://github.com/SajidAnTechie/Expense-Tracker-App",
    },
    {
      id: 6,
      img: img14,
      alt: "COVID19-TRACKER",
      topic: "COVID19-TRACKER",
      link: "https://github.com/SajidAnTechie/COVID-19-Tracker-App",
    },
    {
      id: 7,
      img: img15,
      alt: "CHAT-DISCORD",
      topic: "CHAT-DISCORD",
      link: "https://github.com/SajidAnTechie/ChatDiscord",
    },
    {
      id: 8,
      img: img16,
      alt: "MOVX",
      topic: "MOVX",
      link: "https://github.com/SajidAnTechie/MovieApp",
    },

    {
      id: 9,
      img: img1,
      alt: "We Chat",
      topic: "We Chat",
      link: "https://github.com/SajidAnTechie/WeChat",
    },
    {
      id: 10,
      img: img2,
      alt: "Hospital CMS",
      topic: "Hospital CMS",
      link: "https://github.com/SajidAnTechie/Hospital-Management-Sys",
    },
    {
      id: 11,
      img: img3,
      alt: "Synergy",
      topic: "Synergy",
      link: "https://github.com/SajidAnTechie/SYNERGY",
    },
    {
      id: 12,
      img: img4,
      alt: "LaravelMultiAuth",
      topic: "LaravelMultiAuth",
      link: "https://github.com/SajidAnTechie/laravel-Multiauth",
    },
    {
      id: 13,
      img: img5,
      alt: "LaravelMultiBlog",
      topic: "LaravelMultiBlog",
      link: "https://github.com/SajidAnTechie/laravel-blog",
    },
    {
      id: 14,
      img: img6,
      alt: "LaravelAcl",
      topic: "LaravelAcl",
      link: "https://github.com/SajidAnTechie/Laravel-ACL",
    },
    {
      id: 15,
      img: img7,
      alt: "BlogManagement CMS",
      topic: "BlogManagement CMS",
      link: "https://github.com/SajidAnTechie/Content-Management-Sys",
    },
    {
      id: 16,
      img: img8,
      alt: "React ToDoList",
      topic: "React ToDoList",
      link: "https://github.com/SajidAnTechie/React-ToDoList",
    },
  ];
  return (
    <div className={Classes.content}>
      {projects.map((project) => {
        return (
          <div key={project.id} className={Classes.box}>
            <span className={Classes.topic}>
              <span>{project.topic}</span>
            </span>
            <img src={project.img} alt={project.alt} />
            <a href={project.link}>
              <button className={Classes.githubbut}>View in Github</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
