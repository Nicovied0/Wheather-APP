import React from 'react'
import './CssComponents/Nav.css'

import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = (props) => {
  return (
    <div className='Div-Search'>
      <input className='input' type='text' placeholder='Buscar'></input>
      <button class="weatherIcon input" onClick={() => {props.onSearch('Ciudad Encontrada')}}><FaMapMarkerAlt/> </button>
      
    </div>
  )
}

export default SearchBar