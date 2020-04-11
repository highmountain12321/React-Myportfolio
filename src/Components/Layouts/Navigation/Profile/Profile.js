import React from "react";
import classes from "./Profile.module.css";
import sajid from "../../../../assests/profile/sajid.jpg";

const profile = () => {
  return (
    <div className={classes.profile}>
      <img src={sajid} alt="Sajid Ansari" />
    </div>
  );
};
export default profile;
