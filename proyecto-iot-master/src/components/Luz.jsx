import React from 'react'
import './styles.css';
import { Icono_luz } from '../assets';


function Luz () {
  return (
    <div className='peso'> 
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
      <p className='sensor_wordwrap'><img src= {Icono_luz} className='icono' /> Sensor de luz</p>
    </div>
  )
}

export default Luz