import React from "react";
import Auxillary from "../../../../hoc/Auxillary";
import html from "../../../../assests/skills/html.png";
import css from "../../../../assests/skills/css.png";
import sass from "../../../../assests/skills/sass.png";
import javascript from "../../../../assests/skills/javascript.png";
import react from "../../../../assests/skills/react.png";
import php from "../../../../assests/skills/php.png";
import laravel from "../../../../assests/skills/laravel.png";
import nodejs from "../../../../assests/skills/nodejs.png";
import sql from "../../../../assests/skills/sql.png";
import mysql from "../../../../assests/skills/mysql.png";
import mongodb from "../../../../assests/skills/mongodb.png";
import pwa from "../../../../assests/skills/pwa.png";
import git from "../../../../assests/skills/git.png";
import Classes from "./Skills.module.css";

const Skills = () => {
  return (
    <Auxillary>
      <div className={Classes.skills}>
        <h2>Skills</h2>
        <span>My Skills</span>
      </div>
      <div className={Classes.skills_content}>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={html} alt="HTML5" />
            </div>
            <h4>html5</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={css} alt="CSS" />
            </div>
            <h4>css</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={sass} alt="SASS" />
            </div>
            <h4>sass</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo_website_logo}>
              <img src={javascript} alt="JAVASCRIPT" />
            </div>
            <h4>javascript</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={react} alt="REACT" />
            </div>
            <h4>react</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={php} alt="PHP" />
            </div>
            <h4>php</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div
              className={Classes.skill_logo_website_logo}
              style={{
                paddingTop: "65px",
                paddingBottom: "65px",
              }}
            >
              <img src={laravel} alt="LARAVEL" />
            </div>
            <h4>laravel</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={nodejs} alt="NODEJS" />
            </div>
            <h4>nodejs</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={sql} alt="SQL" />
            </div>
            <h4>sql</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div className={Classes.skill_logo}>
              <img src={mysql} alt="MYSQL" />
            </div>
            <h4>mysql</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div
              className={Classes.skill_logo_website_logo}
              style={{
                paddingTop: "65px",
                paddingBottom: "65px",
              }}
            >
              <img src={mongodb} alt="MONGODB" />
            </div>
            <h4>mongodb</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div
              className={Classes.skill_logo_website_logo}
              style={{
                paddingTop: "45px",
                paddingBottom: "45px",
              }}
            >
              <img src={pwa} alt="PWA" />
            </div>
            <h4>pwa</h4>
          </div>
        </div>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <div
              className={Classes.skill_logo_website_logo}
              style={{
                paddingTop: "60px",
                paddingBottom: "60px",
              }}
            >
              <img src={git} alt="GIT" />
            </div>
            <h4>git</h4>
          </div>
        </div>
      </div>
    </Auxillary>
  );
};

export default Skills;
