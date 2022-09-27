import React, { useState } from "react";
import "./CssComponents/Nav.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <form
      className="Div-Search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        class="weatherIcon input"
        type="submit"
        value="Search"
      ></input>
    </form>
  );
};

export default SearchBar;
