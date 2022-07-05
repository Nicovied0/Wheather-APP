import React from 'react'
import Card from './Card'
import './CssComponents/Cards.css'

export default function Cards ({cities, onClose}){
  if(cities){
    return (
      <div className='Div-Cards-Container'> 
          {
              cities.map(n=>
                  <Card
                  max={n.max}
                  min={n.min}
                  name={n.name}
                  img={n.img}
                  onClose={() => onClose(n.id)}
                  id={n.id}
                  key={n.id}
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

