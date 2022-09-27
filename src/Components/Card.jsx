import React from "react";
import "./CssComponents/Card.css";
import Loader from "./Loader";

const Card = ({ min, max, img, name, onClose }) => {
  console.log(img);
  if (!img) {
    return (
      <div className="Div-Card-Container">
        <div className="Div-Boton">
          <button className="Boton" onClick={onClose}>
            X
          </button>
        </div>
        <h1 className="name">{name}</h1>
        <Loader/>
        <div className="Div-temp">
          <p>Min {min} °</p>
          <p>Max {max} °</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Div-Card-Container">
        <div className="Div-Boton">
          <button className="Boton" onClick={onClose}>
            X
          </button>
        </div>
        <h1 className="name">{name}</h1>
        <img
          className="class-img"
          alt="img"
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        />
        <div className="Div-temp">
          <p>Min {min} °</p>
          <p>Max {max} °</p>
        </div>
      </div>
    );
  }
};

export default Card;
