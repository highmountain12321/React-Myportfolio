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
          Innovative Web Developer, number of experience in website design and
          Back-end . Demonstrated talent for front and back-end web development
          to optimize online presence. Seasoned expert in languages such as
          HTML, SASS/CSS, PHP, laravel as well as scripting languages and
          JavaScript such as REACTJS, NODEJS and API building.
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
