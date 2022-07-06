import React, { useState } from 'react';
import './App.css';
import Cards from './Components/Cards.jsx';
import Nav from './Components/Nav';



function App() {
  const [cities, setCities] = useState([])
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(response_json => {
        if (response_json.main !== undefined) {
          const city = {
            min: Math.round(response_json.main.temp_min),
            max: Math.round(response_json.main.temp_max),
            img: response_json.weather[0].icon,
            id: response_json.id,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            name: response_json.name,
            weather: response_json.weather[0].main,
            clouds: response_json.clouds.all,
            latitud: response_json.coord.lat,
            longitud: response_json.coord.lon
          };
          // Buscar un id repetido
          const encontrada = cities.find(c => c.id === city.id);
          if (encontrada) {
            alert('Esta ciudad ya fue buscada')
          } else {
            setCities(oldCities => [...oldCities, city])
          }

        } else {
          alert(`La ciudad " ${city} ". No fue encontrada`)
        }
      })
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }



  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
