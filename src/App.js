import React from 'react';
import './App.css';
import Cards from './Components/Cards';
import Nav from './Components/Nav';
import data from './data.js';


// function onClose(id){
//   setCities(oldCities=> oldCities.filter(c=> c.id !== id))
// }


function App() {
  return (
    <div className="App">
      <Nav  onSearch={(cities) => alert(cities)}/>
      <Cards cities={data} />
    </div>
  );
}

export default App;
