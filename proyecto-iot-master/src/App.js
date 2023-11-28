import { Navbar, Peso, Luz, Sonido, Mov, Temp } from './components';

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
//import { Bar } from 'react-chartjs-2';
import {io} from 'socket.io-client';

const socket = io('http://localhost:3001');

ChartJS.register(CategoryScale, LinearScale, BarElement);


export function LastReading({ CompID }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initial data fetch
    const fetchData = async () => {
      try {
        const response = await fetch(`http://10.22.207.25:3100/api/getLastLog/${CompID}`);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Use socket.on to listen for updates from the server
    const handleDataUpdate = () => {
      // Assuming that you don't need specific data for the update
      console.log('Data updated');
      // Trigger a re-render by forcing a state update (you can use a dummy value or set it to null)
      setData((prevData) => null); 
    };
    
    socket.on('dataUpdate', handleDataUpdate);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      socket.off('dataUpdate', handleDataUpdate);
    };
  }, [CompID]);
/*
  if (data) {
    const lastData = data[data.length - 1];
    const logValue = lastData.LogValue;

    return <div>{`${logValue} Kg`}</div>;
  }
*/

  return (
  <div>
    <link href="https://fonts.cdnfonts.com/css/chillax" rel="stylesheet" />
    <h1>Dashboard Snooze Smart</h1>
    <div className='container'>
      <div>
        <Navbar></Navbar>
      </div>
        <div className='filas'>
          <div className='container-sensores'>
            <Peso></Peso>
            <Luz></Luz>
            <Sonido></Sonido>
          <div className='container-sensores-2'>
            <Mov></Mov>
            <Temp></Temp>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  
  );
}

