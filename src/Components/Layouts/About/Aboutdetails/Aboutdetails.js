import React from "react";
import myimage from "../../../../assests/about/sajid.JPG";
import Table from "./Table/Table";
import mycv from "../../../../assests/CV/myname.pdf";
import Classes from "./Aboutdetails.module.css";

const aboutdetailes = () => {
  const table = ["table-responsive", Classes.textcolor];
  return (
    <div className={Classes.aboutdetailes}>
      <div className={Classes.myimage}>
        <a href={myimage}>
          <img src={myimage} alt="My image" />
        </a>
      </div>
      <div className={Classes.mydetails}>
        <h2>
          I am <span>Sajid Ansari</span>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis et
          minima neque illum amet eos hic. At incidunt nihil quae modi. Alias
          repudiandae et ut aspernatur maxime dolor suscipit eveniet.
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
