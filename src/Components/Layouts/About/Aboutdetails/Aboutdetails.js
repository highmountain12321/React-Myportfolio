import React from "react";
import Table from "./Table/Table";
import Classes from "./Aboutdetails.module.css";
import myimage from "../../../../assests/about/sajid.JPG";
import myresume from "../../../../assests/CV/Sajid_Ansari_resume.pdf";

const aboutdetailes = () => {
  const table = ["table table-borderless", Classes.textcolor];
  return (
    <div className={Classes.aboutdetailes}>
      <div className={Classes.myimage}>
        <a href={myimage}>
          <img src={myimage} alt="Sajid Ansari" />
        </a>
      </div>
      <div className={Classes.mydetails}>
        <h2>
          I am <span>Sajid Ansari</span>
        </h2>
        <p>
        I'm Sajid Ansari, a computer science student from Nepal & a passionate software engineer specializing in excellent software development that matters. Currently, I am working as a Software engineer at Leapfrog Technology Inc. <br/>

        With an additional interest in improving the technology community & write open source software, you will find me active in tech communities, writing tech-related blogs, encouraging people on software engineering and writing open-source projects. 
        </p>
        <table className={table.join(" ")}>
          <Table />
        </table>
        <a href={myresume} download>
          <button className="btn btn-primary">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
};
export default aboutdetailes;
