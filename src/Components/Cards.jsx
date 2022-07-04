import React from 'react'
import Card from './Card'
import './CssComponents/Cards.css'

const Cards = ({cities, onClose}) => {
  if(cities){
    return (
      <div className='Div-Cards-Container'> 
          {
              cities.map(n=>
                  <Card
                    name={n.name}
                    min={n.main.temp_min}
                    max={n.main.temp_max}
                    img={n.weather[0].icon}
                    onClose ={() => onClose(n.id) }
                    key={n.id}
                    id={n.id}
                  />)
          }
      </div>
    );
    
  }else{
    return(
      <div>Que ciudad Desea encontrar?</div>
    )
  }
}

export default Cards