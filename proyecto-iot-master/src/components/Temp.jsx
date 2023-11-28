import React from 'react'
import './styles.css';
import { Icono_temp } from '../assets';

function Temp() {
  return (
    <div className='peso'> 
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
      <p className='sensor'><img src= {Icono_temp} className='icono' /> Sensor de temperatura</p>
    </div>
  )
}

export default Temp