import React from 'react'
import './styles.css';
import { Icono_peso } from '../assets';

function Peso() {
  return (
  <div>
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
    <div className='peso'>
      <p className='sensor_wordwrap'><img src= {Icono_peso} className='icono' />Sensor de peso</p>
    </div>
  </div>
  )
}

export default Peso