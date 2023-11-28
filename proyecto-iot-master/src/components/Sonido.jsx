import React from 'react'
import './styles.css';
import { Icono_sonido } from '../assets';

function Sonido() {
  return (
    <div className='peso'> 
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
      <p className='sensor_wordwrap'><img src= {Icono_sonido} className='icono' />Sensor de sonido</p>
    </div>
  )
}

export default Sonido