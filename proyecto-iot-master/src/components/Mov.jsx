import React from 'react'
import './styles.css';
import { Icono_mov } from '../assets';

function Mov() {
  return (
    <div className='peso'> 
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
      <p className='sensor'><img src= {Icono_mov} className='icono' /> Sensor de movimiento</p>
    </div>
  )
}

export default Mov