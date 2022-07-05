import React from 'react'
import './CssComponents/Card.css'

const Card = ({min,max,img,name,onClose}) => {
  return (
    <div className='Div-Card-Container'>
      <div className='Div-Boton'>
        <button className="Boton" onClick={onClose}>X</button>

      </div>
      <h1 className='name'>{name}</h1>
        <img className='class-img'alt='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
        <div className='Div-temp'>
          <p>Min {min} °</p>
          <p>Max {max} °</p>
        </div>
    </div>
  )
}

export default Card