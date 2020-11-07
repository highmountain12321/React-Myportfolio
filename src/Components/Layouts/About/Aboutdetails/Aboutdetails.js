import React from "react";
import myimage from "../../../../assests/about/sajid.JPG";
import Table from "./Table/Table";
import mycv from "../../../../assests/CV/Sajid_Ansari_CV.pdf";
import Classes from "./Aboutdetails.module.css";

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
          HTML,CSS,PHP and as well as scripting languages and JavaScript.
        </p>
        <table className={table.join(" ")}>
          <Table />
        </table>
        <a href={mycv} download>
          <button className="btn btn-primary">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
};
export default aboutdetailes;
