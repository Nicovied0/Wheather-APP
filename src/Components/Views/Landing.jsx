import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CssComponents/Landing.module.css'
import backgrounVideo from '../../rain.mp4'

const Landing = () => {
  return (
    <div className={`${style.container}`}>
      <video autoPlay loop muted id='video' className={`${style.video}`}>
          <source src={backgrounVideo} type='video/mp4'/>
      </video>
    <Link to={'/home'} className={`${style.btn}`}> <button className={`${style.btnHome}`}>Go home</button ></Link>
    </div>
  )
}

export default Landing