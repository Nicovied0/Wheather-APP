import React from 'react'
import SearchBar from './SearchBar';
import './CssComponents/Nav.css'

const Nav = ({onSearch}) => {
  return (
    <div className='Nav-container'>
      <SearchBar onSearch={onSearch} />
        
    </div>
  )
}

export default Nav