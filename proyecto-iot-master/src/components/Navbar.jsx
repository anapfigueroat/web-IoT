import React from 'react'
import './styles.css';
import { Home, Peso, Iluminacion, Sonido, Mov, Temp } from '../assets';



const Navbar = () => {
  return (
   <div className='navbar'>
      <img src={Home} alt="" />
      <img src= {Peso} alt="" />
      <img src={Iluminacion} alt="" />
      <img src={Sonido} alt="" />
      <img src={Mov} alt="" />
      <img src={Temp} alt="" className='img_temp' />
   </div>
  )
}

export default Navbar