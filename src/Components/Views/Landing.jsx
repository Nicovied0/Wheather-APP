import React from "react";
import { Link } from "react-router-dom";
import style from "../CssComponents/Landing.module.css";

const Landing = () => {
  return (
    <div className={`${style.container}`}>
      <Link to={"/home"} className={`${style.btn}`}>
       
        <button className={`${style.btnHome}`}>Go home</button>
      </Link>
    </div>
  );
};

export default Landing;
