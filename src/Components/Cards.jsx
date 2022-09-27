import React from "react";
import Card from "./Card";
import "./CssComponents/Cards.css";
import Loader from "./Loader";

export default function Cards({ cities, onClose }) {
  // console.log(cities.length, "ciudad de card");
  if (cities.length === 0) {
    return <div>Que ciudad Desea encontrar?</div>;
  } else {
    return (
      <div className="Div-Cards-Container">
        {cities?.map((n) => (
          <Card
            max={n.max}
            min={n.min}
            name={n.name}
            img={n.img ? n.img : <Loader />}
            onClose={() => onClose(n.id)}
            id={n.id}
            key={n.id}
          />
        ))}
      </div>
    );
  }
}
